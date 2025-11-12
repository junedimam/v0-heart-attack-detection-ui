import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"

interface Alert {
  id: string
  type: "warning" | "normal" | "critical"
  title: string
  message: string
  time: string
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "normal",
    title: "✅ System Online",
    message: "All sensors operational and calibrated",
    time: "Just now",
  },
  {
    id: "2",
    type: "normal",
    title: "✅ Baseline Established",
    message: "Personal heart rate baseline updated",
    time: "2 minutes ago",
  },
  {
    id: "3",
    type: "warning",
    title: "⚠️ Mild Stress Detected",
    message: "Heart rate elevated by 12 BPM above baseline",
    time: "15 minutes ago",
  },
]

export default function AlertsPanel() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">System Alerts</h2>
            <p className="text-muted-foreground mt-2">Real-time notifications and anomaly detection</p>
          </div>

          <div className="space-y-4">
            {alerts.map((alert) => (
              <Card
                key={alert.id}
                className={`border-l-4 ${
                  alert.type === "critical"
                    ? "border-l-destructive bg-destructive/5"
                    : alert.type === "warning"
                      ? "border-l-accent bg-accent/5"
                      : "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                } transition-all duration-300 hover:shadow-md`}
              >
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="mt-1">
                    {alert.type === "critical" ? (
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    ) : alert.type === "warning" ? (
                      <AlertCircle className="w-6 h-6 text-accent" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{alert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">{alert.time}</p>
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
