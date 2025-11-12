"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

interface Vital {
  label: string
  value: number | string
  unit: string
  status: "healthy" | "warning" | "critical"
  icon: string
}

const vitals: Vital[] = [
  { label: "Heart Rate", value: 72, unit: "BPM", status: "healthy", icon: "❤️" },
  { label: "Posture", value: "Upright", unit: "", status: "healthy", icon: "🧍" },
  { label: "Risk Level", value: "Low", unit: "", status: "healthy", icon: "⚠️" },
]

export default function VitalsPanel() {
  const [animatedValues, setAnimatedValues] = useState<number[]>([])

  useEffect(() => {
    setAnimatedValues([72, 85, 68])
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950"
      case "warning":
        return "border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950"
      case "critical":
        return "border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950"
      default:
        return "border-border bg-card"
    }
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Live Vitals</h2>
            <p className="text-muted-foreground mt-2">Real-time health metrics and status indicators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vitals.map((vital, index) => (
              <Card
                key={vital.label}
                className={`border-2 ${getStatusColor(vital.status)} overflow-hidden transition-all duration-300 hover:shadow-lg`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{vital.icon}</span>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        vital.status === "healthy"
                          ? "bg-emerald-500"
                          : vital.status === "warning"
                            ? "bg-amber-500"
                            : "bg-red-500"
                      } animate-pulse`}
                    ></div>
                  </div>

                  <p className="text-sm font-medium text-muted-foreground">{vital.label}</p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {typeof vital.value === "number" ? animatedValues[index] || vital.value : vital.value}
                    </span>
                    {vital.unit && <span className="text-lg text-muted-foreground">{vital.unit}</span>}
                  </div>

                  <div className="mt-4 w-full h-1 bg-background rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        vital.status === "healthy"
                          ? "bg-emerald-500"
                          : vital.status === "warning"
                            ? "bg-amber-500"
                            : "bg-red-500"
                      } rounded-full transition-all duration-500`}
                      style={{ width: `${animatedValues[index] || 50}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
