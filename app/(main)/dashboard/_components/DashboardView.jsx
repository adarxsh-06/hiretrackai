"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";

import { format, formatDistanceToNow } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DashboardView = ({ insights }) => {
  // Transform salary data for the chart
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  // Format dates using date-fns
  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Badge className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 border dark:border-gray-700">
          Last updated: {lastUpdatedDate}
        </Badge>
      </div>

      {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-xl transition-colors duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Market Outlook
            </CardTitle>
            <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
          </CardHeader>

          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {insights.marketOutlook}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Next update {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-xl transition-colors duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Industry Growth
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {insights.growthRate.toFixed(1)}%
            </div>
            <Progress value={insights.growthRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-xl transition-colors duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Demand Level
            </CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {insights.demandLevel}
            </div>
            <div
              className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
                insights.demandLevel
              )}`}
            />
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-xl transition-colors duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Top Skills
            </CardTitle>
            <Brain className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {insights.topSkills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border dark:border-gray-700"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Salary Ranges Chart */}
      <Card className="col-span-4 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-xl transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">
            Salary Ranges by Role
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Displaying minimum, median, and maximum salaries (in thousands - in
            dollars)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="gray" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white dark:bg-gray-800 border rounded-lg p-2 shadow-md dark:shadow-lg">
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            {label}
                          </p>
                          {payload.map((item) => (
                            <p
                              key={item.name}
                              className="text-sm text-gray-700 dark:text-gray-300"
                            >
                              {item.name}: ${item.value}K
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="min" fill="#16A34A" name="Min Salary (K)" />
                <Bar dataKey="median" fill="#0EA5E9" name="Median Salary (K)" />
                <Bar dataKey="max" fill="#9333EA" name="Max Salary (K)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-xl transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Key Industry Trends
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {insights.keyTrends.map((trend, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                  <span className="text-gray-900 dark:text-gray-100">
                    {trend}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg rounded-xl transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">
              Recommended Skills
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Skills to consider developing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {insights.recommendedSkills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border dark:border-gray-700"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
