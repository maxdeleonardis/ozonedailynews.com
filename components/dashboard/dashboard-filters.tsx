"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Filter, RefreshCw, Calendar } from "lucide-react"
import { useState } from "react"

interface DashboardFiltersProps {
  onRefresh: () => void
  onCategoryChange: (category: string | null) => void
  onDateRangeChange: (days: number) => void
  isRefreshing?: boolean
}

export function DashboardFilters({
  onRefresh,
  onCategoryChange,
  onDateRangeChange,
  isRefreshing = false,
}: DashboardFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDays, setSelectedDays] = useState(7)

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  const handleDateRangeSelect = (days: number) => {
    setSelectedDays(days)
    onDateRangeChange(days)
  }

  return (
    <div className="flex items-center gap-3 mb-6">
      {/* Date Range Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last {selectedDays} days
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Date Range</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleDateRangeSelect(7)}>
            Last 7 days
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDateRangeSelect(14)}>
            Last 14 days
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDateRangeSelect(30)}>
            Last 30 days
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDateRangeSelect(90)}>
            Last 90 days
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Category Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            {selectedCategory || "All Categories"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleCategorySelect(null)}>
            All Categories
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleCategorySelect("Technology")}>
            Technology
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleCategorySelect("Politics")}>
            Politics
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleCategorySelect("Business")}>
            Business
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleCategorySelect("Markets")}>
            Markets
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Refresh Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onRefresh}
        disabled={isRefreshing}
        className="gap-2 ml-auto"
      >
        <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
        Refresh
      </Button>
    </div>
  )
}
