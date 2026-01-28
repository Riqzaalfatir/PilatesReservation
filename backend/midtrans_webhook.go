package main

import "strings"


import (
	"encoding/json"
	"fmt"
	"net/http"
)

type MidtransNotification struct {
	OrderID            string `json:"order_id"`
	TransactionStatus  string `json:"transaction_status"`
	FraudStatus        string `json:"fraud_status"`
	PaymentType        string `json:"payment_type"`
}

func MidtransWebhookHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	var notif MidtransNotification
	if err := json.NewDecoder(r.Body).Decode(&notif); err != nil {
		http.Error(w, "Invalid payload", http.StatusBadRequest)
		return
	}

	fmt.Println("📩 MIDTRANS WEBHOOK")
	fmt.Println("ORDER ID:", notif.OrderID)
	fmt.Println("STATUS:", notif.TransactionStatus)

	if notif.TransactionStatus == "settlement" {

		parts := strings.Split(notif.OrderID, "-")
		scheduleID := strings.Join(parts[:4], "-")
		date := strings.Join(parts[:3], "-")

		for i, s := range schedules[date] {
			if s.ID == scheduleID {
				schedules[date][i].Status = "booked"
				fmt.Println("✅ SCHEDULE BOOKED:", scheduleID)
				break
			}
		}
	}

	w.WriteHeader(http.StatusOK)
}


