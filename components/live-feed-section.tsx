import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LiveFeedSection() {
  return (
    <section id="monitoring" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Live Monitoring Feed</h2>
            <p className="text-muted-foreground mt-2">Real-time facial and posture tracking</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video Feed Card */}
            <Card className="overflow-hidden border border-border shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Face Detection</CardTitle>
                  <Badge className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <svg className="w-full h-full opacity-20" viewBox="0 0 200 200">
                    <circle cx="100" cy="80" r="30" fill="currentColor" />
                    <ellipse cx="100" cy="140" rx="35" ry="40" fill="currentColor" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-primary rounded-lg animate-pulse"></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">rPPG Heart Rate Detection • 73 BPM</p>
              </CardContent>
            </Card>

            {/* Posture Analysis Card */}
            <Card className="overflow-hidden border border-border shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Posture Analysis</CardTitle>
                  <Badge className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                    Tracking
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative">
                  <svg className="w-32 h-32 text-primary opacity-30" viewBox="0 0 100 200" fill="none">
                    <circle cx="50" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="28" x2="50" y2="60" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="35" x2="35" y2="50" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="35" x2="65" y2="50" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="60" x2="35" y2="100" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="60" x2="65" y2="100" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-xs text-muted-foreground mt-4">MHAVH Posture Model • Upright Detected</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
