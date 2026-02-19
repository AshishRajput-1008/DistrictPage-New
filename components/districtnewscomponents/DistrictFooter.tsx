import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Newspaper } from 'lucide-react';
import { Button } from '../button';

  const otherDistricts = [
    "इंदौर",
    "जबलपुर",
    "ग्वालियर",
    "उज्जैन",
    "सागर",
    "देवास",
    "सतना",
    "रतलाम",
    "इंदौर",
    "जबलपुर",
    "इंदौर",
    "जबलपुर",
  ];


export default function DistrictFooter() {
  return (
    <>
         {/* ALL NEWS SECTION */}
            <Card
              className="mb-8 text-white border-0 shadow-xl mt-6"
              style={{ background: "linear-gradient(to right, #0C0E0B, #D6303A)" }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Newspaper className="w-12 h-12" />
                    <div>
                      <h3 className="text-2xl font-bold mb-1">सभी समाचार श्रेणियाँ</h3>
                      <p className="opacity-90">राजनीति, खेल, मनोरंजन और भी बहुत कुछ</p>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="font-semibold"
                    style={{ backgroundColor: "#D6E7F3", color: "#0C0E0B" }}
                  >
                    एक्सप्लोर करें <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* OTHER DISTRICTS STRIP */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-8"
                  style={{ background: "linear-gradient(to bottom, #D6303A, #0C0E0B)" }}
                ></div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  अन्य जिलों की खबरें
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {otherDistricts.map((district, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="border-2 font-semibold shadow-sm hover:shadow-md rounded-lg px-6 py-2 transition-all duration-300"
                    style={{ borderColor: "#D6E7F3", color: "#0C0E0B" }}
                  >
                    {district}
                  </Button>
                ))}
              </div>
            </div>

            {/* FINAL AD BANNER */}
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg p-8 text-center border-2 border-dashed border-gray-400">
              <img src="https://picsum.photos/998/90?random=403" />
            </div>

               {/* FOOTER */}
        <footer
          className="text-white py-8 mt-12"
          style={{ backgroundColor: "#0C0E0B" }}
        >
          <div className="px-[5.9vw] text-center">
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#D6303A" }}>
              SadaivSatya
            </h3>
            <p style={{ color: "#D6E7F3", opacity: 0.6 }}>
              सत्य की आवाज़, हर जिले की बात
            </p>
          </div>
        </footer>
    </>
  )
}
