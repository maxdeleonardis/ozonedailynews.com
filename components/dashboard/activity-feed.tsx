import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ActivityItem } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"

interface ActivityFeedProps {
  activities: ActivityItem[]
  maxItems?: number
}

export function ActivityFeed({ activities, maxItems = 10 }: ActivityFeedProps) {
  const displayActivities = activities.slice(0, maxItems)

  const getActivityIcon = (type: ActivityItem["type"]) => {
    const icons = {
      article: "📝",
      market: "📊",
      user: "👤",
      system: "⚙️"
    }
    return icons[type] || "•"
  }

  const getTypeBadgeVariant = (type: ActivityItem["type"]) => {
    const variants = {
      article: "default",
      market: "secondary",
      user: "outline",
      system: "outline"
    }
    return variants[type] || "default"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayActivities.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No recent activity
            </p>
          ) : (
            displayActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0"
              >
                <div className="text-xl mt-0.5">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <Badge variant={getTypeBadgeVariant(activity.type) as any} className="text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  {activity.user && (
                    <p className="text-xs text-muted-foreground">
                      by {activity.user}
                    </p>
                  )}
                </div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.timestamp
                    ? formatDistanceToNow(new Date(activity.timestamp), {
                        addSuffix: true,
                      })
                    : "Unknown"}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
