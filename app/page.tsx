import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag, Globe, CreditCard, BarChart, Share2, Mail, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6" />
              <span className="inline-block font-bold">Shopify Integrations</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Connect Your Business with Shopify Integrations
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover all the powerful integrations available for your Shopify store to enhance your business
                  operations.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="px-8">Browse Integrations</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Popular Integration Categories
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect your Shopify store with these essential services to streamline your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Payment Gateways</CardTitle>
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Connect with payment providers like PayPal, Stripe, Apple Pay, and more.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Marketing & Advertising</CardTitle>
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Integrate with Facebook, Google, Instagram, TikTok, and email marketing platforms.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Shipping & Fulfillment</CardTitle>
                  <Globe className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Connect with carriers like DHL, UPS, FedEx, and fulfillment services.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Analytics & Reporting</CardTitle>
                  <BarChart className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Integrate with Google Analytics, Hotjar, and other data analysis tools.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Customer Support</CardTitle>
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Connect with Zendesk, Intercom, Gorgias, and other support platforms.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Social Media</CardTitle>
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Integrate with social platforms for selling and content sharing.
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Popular Shopify Integrations
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Connect your Shopify store with these popular services to enhance your business operations.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=40&width=40" alt="PayPal" width={40} height={40} />
                    </div>
                    <div className="font-medium">PayPal</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Stripe" width={40} height={40} />
                    </div>
                    <div className="font-medium">Stripe</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Google" width={40} height={40} />
                    </div>
                    <div className="font-medium">Google</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Facebook" width={40} height={40} />
                    </div>
                    <div className="font-medium">Facebook</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Instagram" width={40} height={40} />
                    </div>
                    <div className="font-medium">Instagram</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=40&width=40" alt="TikTok" width={40} height={40} />
                    </div>
                    <div className="font-medium">TikTok</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Mailchimp" width={40} height={40} />
                    </div>
                    <div className="font-medium">Mailchimp</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Klaviyo" width={40} height={40} />
                    </div>
                    <div className="font-medium">Klaviyo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Shopify Integrations. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
