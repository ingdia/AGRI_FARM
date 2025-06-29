import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    action: "posted in",
    target: "Dairy Production Techniques",
    time: "2 hours ago",
  },
  {
    user: {
      name: "Sarah Smith",
      email: "sarah@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SS",
    },
    action: "uploaded",
    target: "Milk Processing Guide",
    time: "4 hours ago",
  },
  {
    user: {
      name: "Michael Johnson",
      email: "michael@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MJ",
    },
    action: "listed",
    target: "Dairy Equipment for Sale",
    time: "yesterday",
  },
  {
    user: {
      name: "Emily Brown",
      email: "emily@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "EB",
    },
    action: "commented on",
    target: "Cattle Feed Discussion",
    time: "2 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div className="flex items-center" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name} <span className="text-muted-foreground">{activity.action}</span>{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
