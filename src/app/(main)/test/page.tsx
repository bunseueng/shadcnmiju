"use client";

import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Example from "./credit-card";

export default function CustomerProfile() {
  // Mock customer data
  const customer = {
    name: "John Anderson",
    phone: "(555) 987-6543",
    membershipNumber: "MEMBER-2024-001",
    membershipStatus: "Active",
    joinDate: "January 2024",
    recentVehicles: [
      {
        id: 1,
        model: "BMW 3 Series",
        plateNumber: "CA-BMW-21",
        year: 2023,
        image: "/previews/images.jfif",
      },
      {
        id: 2,
        model: "Tesla Model 3",
        plateNumber: "CA-TESLA-99",
        year: 2022,
        image: "/previews/tesla.webp",
      },
      {
        id: 3,
        model: "Mercedes C-Class",
        plateNumber: "CA-MERC-42",
        year: 2021,
        image: "/previews/mercedes.jpg",
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:opacity-80 transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Membership Card */}
          <div className="flex items-center justify-center flex-col mb-8">
            <img
              src="/previews/CARD MEMBERSHIP ( AUSD )_page-0002.jpg"
              alt="credit card"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Member Card: {customer.membershipNumber}
              </p>
              <p className="text-lg font-bold text-foreground">
                {customer.name}
              </p>
            </div>
          </div>

          {/* Customer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">
                Profile Information
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Full Name
                  </p>
                  <p className="font-semibold text-foreground">
                    {customer.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-semibold text-foreground">
                    {customer.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Member Since
                  </p>
                  <p className="font-semibold text-foreground">
                    {customer.joinDate}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-bold text-foreground mb-4">
                Membership Benefits
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">
                    Exclusive partner discounts
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">
                    Priority service booking
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">
                    Special member-only offers
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Recently Purchased Cars */}
          <div className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              My Vehicles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {customer.recentVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="rounded-lg border border-border overflow-hidden hover:shadow-lg transition"
                >
                  <div className="bg-muted h-40 flex items-center justify-center overflow-hidden">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.model}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-1">
                      {vehicle.model}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-semibold">{vehicle.year}</span>
                    </p>
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-1">
                        Plate Number
                      </p>
                      <p className="font-mono font-semibold text-foreground">
                        {vehicle.plateNumber}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
