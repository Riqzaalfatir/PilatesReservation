package main


import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"time"

	midtrans "github.com/midtrans/midtrans-go"
	snap "github.com/midtrans/midtrans-go/snap"
)

type Schedule struct {
	ID         string `json:"id"`
	Time       string `json:"time"`
	ClassName  string `json:"className"`
	Location   string `json:"location"`
	Instructor string `json:"instructor"`
	Status     string `json:"status"`
	Waktu      string `json:"waktu"`
	Harga      string `json:"harga"`
}

type BookingRequest struct {
	ScheduleID string `json:"schedule_id"`
	Date       string `json:"date"`
	Time       string `json:"time"`
	Name       string `json:"name"`
	Notes      string `json:"notes"`
	Harga      string `json:"harga"`
}

var schedules = map[string][]Schedule{
	"2026-01-27": {
		{"2026-01-27-0700", "07:00", "Morning Pilates", "Studio A", "Nina", "available", "55 Menit", "150000"},
		{"2026-01-27-0800", "08:00", "Pilates Beginner", "Studio B", "Dewi", "available", "55 Menit", "150000"},
		{"2026-01-27-0900", "07:00", "Pilates Intermediate", "Studio A", "Rina", "available", "55 Menit", "170000"},
		{"2026-01-27-1000", "08:00", "Pilates Intermediate", "Studio b", "Lina", "available", "60 Menit", "180000"},
		{"2026-01-27-1100", "16:00", "Pilates Intermediate", "Studio A", "Rina", "available", "55 Menit", "200000"},
		{"2026-01-27-1200", "14:00", "Pilates Intermediate", "Studio C", "Luna", "available", "60 Menit", "180000"},
		{"2026-01-27-1300", "07:00", "Pilates Intermediate", "Studio A", "Rani", "available", "55 Menit", "150000"},
		{"2026-01-27-1400", "08:00", "Pilates Intermediate", "Studio B", "Prince", "available", "55 Menit", "140000"},
	},
}

func enableCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func getSchedule(w http.ResponseWriter, r *http.Request) {
	enableCORS(w)

	if r.Method == http.MethodOptions {
		return
	}

	date := r.URL.Query().Get("date")
	if date == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"message": "date query is required",
		})
		return
	}

	result := schedules[date]

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(result)
}

func createBooking(w http.ResponseWriter, r *http.Request) {
	enableCORS(w)

	if r.Method == http.MethodOptions {
		return
	}

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	var req BookingRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	fmt.Println("📌 BOOKING MASUK:", req)

	json.NewEncoder(w).Encode(map[string]string{
		"status": "success",
	})
}


func createPayment(w http.ResponseWriter, r *http.Request) {
	enableCORS(w)

	if r.Method == http.MethodOptions {
		return
	}
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	var req BookingRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	amount := mustInt(req.Harga)
	if amount <= 0 {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"message": "Harga tidak valid",
		})
		return
	}

	midtrans.ServerKey = "SB-Mid-server-s5t5BsB0GCOX4MFCQmaSZatm"
	midtrans.Environment = midtrans.Sandbox

	
	snapReq := &snap.Request{
		TransactionDetails: midtrans.TransactionDetails{
			OrderID:  fmt.Sprintf("%s-%d", req.ScheduleID, time.Now().Unix()),
			GrossAmt: int64(amount),
		},
		CustomerDetail: &midtrans.CustomerDetails{
			FName: req.Name,
		},
	}

	snapClient := snap.Client{}
snapClient.New(midtrans.ServerKey, midtrans.Sandbox)

snapResp, err := snapClient.CreateTransaction(snapReq)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{
			"message": err.Error(),
		})
		return
	}

	json.NewEncoder(w).Encode(map[string]string{
		"snapToken": snapResp.Token,
	})
}


func mustInt(val string) int {
	i, err := strconv.Atoi(val)
	if err != nil {
		return 0
	}
	return i
}

func main() {
	http.HandleFunc("/api/schedule", getSchedule)
    http.HandleFunc("/api/classes", getClasses) 
	http.HandleFunc("/api/booking", createBooking)
	http.HandleFunc("/api/payment", createPayment)
	http.HandleFunc("/api/midtrans/webhook", MidtransWebhookHandler)


	fmt.Println("✅ Server running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
