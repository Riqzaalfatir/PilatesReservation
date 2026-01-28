package main

import (
	"encoding/json"
	"net/http"
)

type Class struct {
	ID       string `json:"id"`
	Slug     string `json:"slug"`
	Title    string `json:"title"`
	Category string `json:"category"`
	Duration string `json:"duration"`
	Level    string `json:"level"`
	Image    string `json:"image"`

	ShortDescription string      `json:"shortDescription"`
	Detail           ClassDetail `json:"detail"`
}

type ClassDetail struct {
	Intro      string   `json:"intro"`
	Overview   string   `json:"overview"`
	Benefits   []string `json:"benefits"`
	WhatYouDo  []string `json:"whatYouDo"`
	Equipments []string `json:"equipments"`
	PerfectFor []string `json:"perfectFor"`
	Conclusion string   `json:"conclusion"`
	Contact    string   `json:"contact"`
}

var classes = []Class{
	{
	ID:       "pilates-beginner",
	Slug:     "pilates-beginner",
	Title:    "Pilates Beginner",
	Category: "Private 1:1",
	Duration: "60 mins",
	Level:    "Open to All",
	Image:    "/class1.jpg",

	ShortDescription: "Private one-on-one Pilates session focused on building strong foundations, improving posture, and strengthening your core safely.",

	Detail: ClassDetail{
		Intro: "Pilates Beginner merupakan sesi Pilates privat satu lawan satu yang dirancang khusus bagi pemula maupun siapa saja yang ingin memulai latihan Pilates dengan teknik yang benar dan aman. Dalam sesi ini, seluruh latihan disesuaikan dengan kondisi tubuh, kebutuhan, serta tujuan kebugaran masing-masing peserta. Fokus utama dari kelas ini adalah membangun fondasi gerakan yang kuat melalui teknik yang tepat, pernapasan yang terkontrol, dan kesadaran tubuh yang lebih baik. Dengan pendampingan penuh dari instruktur profesional, setiap gerakan dilakukan secara bertahap untuk memastikan keamanan sekaligus efektivitas latihan.",

		Overview: "Kelas ini dirancang secara personal untuk membantu Anda membangun fondasi gerakan yang kuat dan aman melalui penerapan teknik yang tepat, pernapasan yang terkontrol, serta peningkatan kesadaran tubuh secara menyeluruh. Seluruh sesi dipandu langsung oleh instruktur profesional yang memberikan perhatian penuh selama latihan berlangsung. Setiap gerakan dan intensitas latihan disesuaikan dengan kondisi fisik, kemampuan, serta tujuan kebugaran masing-masing peserta, sehingga latihan menjadi lebih efektif, nyaman, dan minim risiko cedera.",

		Benefits: []string{
	      "Membangun otot inti yang kuat dan stabil",
	      "Meningkatkan postur tubuh serta keseimbangan dan keselarasan gerak",
	      "Mengurangi risiko cedera melalui teknik latihan yang benar dan aman",
        },

WhatYouDo: []string{
	"Mempelajari gerakan dasar Pilates secara bertahap dan terstruktur",
	"Melatih pernapasan yang benar serta aktivasi otot inti (core)",
	"Melakukan latihan terkontrol dengan bimbingan penuh dari instruktur",
},


		Equipments: []string{
	"Cadillac",
	"Reformer",
	"Barrel",
	"Spine Corrector",
},


		PerfectFor: []string{
	"Pemula yang baru memulai latihan Pilates",
	"Peserta pasca rehabilitasi atau pemulihan cedera",
	"Individu yang menginginkan sesi latihan privat dan personal",
},


		Conclusion: "Pilates Beginner merupakan titik awal yang ideal untuk membangun kekuatan tubuh, meningkatkan kepercayaan diri, serta menciptakan koneksi yang lebih baik antara tubuh dan pikiran. Dengan lingkungan latihan yang aman, suportif, dan personal, kelas ini membantu Anda membangun fondasi kebugaran yang kuat untuk perjalanan Pilates jangka panjang.",


		Contact: "08211881111",
	},
},
{
	ID:       "morning-pilates",
	Slug:     "morning-pilates",
	Title:    "Morning Pilates",
	Category: "Group Class",
	Duration: "55 mins",
	Level:    "Beginner Friendly",
	Image:    "/class8.jpg",

	ShortDescription: "An energizing group Pilates class designed to refresh your body and prepare you for the day ahead.",

	Detail: ClassDetail{
		Intro: "Morning Pilates is a refreshing group class designed to help you start the day with energy and clarity.",

		Overview: "This session combines gentle mobility, flexibility, and light strength training to wake up the body naturally. The movements are designed to improve circulation, posture, and overall movement quality.",

		Benefits: []string{
			"Boost energy levels in the morning",
			"Improve flexibility and mobility",
			"Build a consistent healthy routine",
		},

		WhatYouDo: []string{
			"Dynamic stretching and mobility exercises",
			"Light core and posture work",
			"Controlled breathing techniques",
		},

		Equipments: []string{
			"Mat",
			"Resistance Band",
		},

		PerfectFor: []string{
			"Morning routine lovers",
			"Beginners to Pilates",
			"Anyone wanting a fresh start",
		},

		Conclusion: "Morning Pilates is the ideal way to energize your body and mind before starting a productive day.",

		Contact: "082118861279",
	},
},
{
	ID:       "reformer-flow",
	Slug:     "reformer-flow",
	Title:    "Reformer Flow",
	Category: "Reformer Class",
	Duration: "55 mins",
	Level:    "Intermediate",
	Image:    "/class7.jpg",

	ShortDescription: "Dynamic reformer Pilates class focusing on strength, control, and fluid movement.",

	Detail: ClassDetail{
		Intro: "Reformer Flow is a dynamic Pilates class that challenges both strength and coordination.",

		Overview: "Using the reformer machine, this class focuses on fluid movement patterns that enhance core engagement, balance, and stability. Each exercise flows smoothly into the next, creating a challenging yet enjoyable workout.",

		Benefits: []string{
			"Improve core strength and stability",
			"Enhance body control and coordination",
			"Increase movement efficiency",
		},

		WhatYouDo: []string{
			"Continuous reformer-based movements",
			"Controlled resistance training",
			"Focus on precision and flow",
		},

		Equipments: []string{
			"Reformer",
		},

		PerfectFor: []string{
			"Intermediate Pilates practitioners",
			"Those seeking dynamic workouts",
			"Members wanting deeper core challenge",
		},

		Conclusion: "Reformer Flow helps you move with strength, control, and grace through structured dynamic sequences.",

		Contact: "082118861279",
	},
},

{
	ID:       "pilates-intermediate",
	Slug:     "pilates-intermediate",
	Title:    "Pilates Intermediate",
	Category: "Group Class",
	Duration: "60 mins",
	Level:    "Intermediate",
	Image:    "/class4.jpeg",

	ShortDescription: "Intermediate Pilates class designed to enhance strength, balance, and body control.",

	Detail: ClassDetail{
		Intro: "Pilates Intermediate is designed for those who already understand basic Pilates principles.",

		Overview: "This class focuses on precision, balance, and controlled strength training. Movements are more challenging and require deeper core activation and coordination.",

		Benefits: []string{
			"Improve balance and body awareness",
			"Develop deeper core strength",
			"Enhance posture and alignment",
		},

		WhatYouDo: []string{
			"Progressive Pilates sequences",
			"Balance and stability challenges",
			"Strength-focused movements",
		},

		Equipments: []string{
			"Mat",
			"Reformer",
			"Resistance Band",
		},

		PerfectFor: []string{
			"Members with Pilates experience",
			"Those ready for progression",
			"Strength and control seekers",
		},

		Conclusion: "Pilates Intermediate bridges the gap between basic practice and advanced training.",

		Contact: "082118861279",
	},
},


{
	ID:       "morning-stretch",
	Slug:     "morning-stretch",
	Title:    "Morning Stretch",
	Category: "Group Class",
	Duration: "45 mins",
	Level:    "All Levels",
	Image:    "/class5.jpg",

	ShortDescription: "Gentle morning stretching class to improve flexibility and release muscle tension.",

	Detail: ClassDetail{
		Intro: "Morning Stretch is a calm and gentle class designed to ease your body into the day.",

		Overview: "This session focuses on slow stretching, breathing, and relaxation techniques to release muscle tension and improve flexibility.",

		Benefits: []string{
			"Reduce stiffness and tension",
			"Improve flexibility",
			"Promote relaxation and focus",
		},

		WhatYouDo: []string{
			"Full-body stretching routines",
			"Breathing and relaxation exercises",
			"Gentle mobility movements",
		},

		Equipments: []string{
			"Mat",
			"Yoga Strap",
		},

		PerfectFor: []string{
			"All fitness levels",
			"Morning warm-up seekers",
			"Those needing gentle movement",
		},

		Conclusion: "Morning Stretch helps you feel relaxed, flexible, and ready to face the day.",

		Contact: "082118861279",
	},
},


{
	ID:       "pilates-advance",
	Slug:     "pilates-advance",
	Title:    "Pilates Advance",
	Category: "Advanced Class",
	Duration: "60 mins",
	Level:    "Advanced",
	Image:    "/class6.jpg",

	ShortDescription: "High-intensity advanced Pilates class for experienced practitioners seeking greater challenges.",

	Detail: ClassDetail{
		Intro: "Pilates Advance is designed for experienced practitioners who want to push their limits.",

		Overview: "This high-intensity session focuses on complex movements, endurance, and precision. Each exercise challenges both physical strength and mental focus.",

		Benefits: []string{
			"Increase strength and endurance",
			"Enhance control and precision",
			"Challenge physical and mental limits",
		},

		WhatYouDo: []string{
			"Advanced Pilates sequences",
			"Complex equipment-based exercises",
			"High-level control and coordination drills",
		},

		Equipments: []string{
			"Reformer",
			"Cadillac",
			"Chair",
		},

		PerfectFor: []string{
			"Advanced practitioners",
			"High-intensity workout lovers",
			"Those seeking peak performance",
		},

		Conclusion: "Pilates Advance delivers a powerful and rewarding experience for those ready to master their practice.",

		Contact: "082118861279",
	},
},


}

func getClasses(w http.ResponseWriter, r *http.Request) {
	enableCORS(w)

	if r.Method == http.MethodOptions {
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(classes)
}
