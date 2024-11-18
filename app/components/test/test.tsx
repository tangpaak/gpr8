import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GoldBarOffering() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
          Latest Gold Bar Offerings
        </h2>
        <div>
          <Tabs defaultValue="usd" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="usd">USD</TabsTrigger>
              <TabsTrigger value="hkd">HKD</TabsTrigger>
              <TabsTrigger value="cny">CNY</TabsTrigger>
            </TabsList>
            <TabsContent value="usd">
              <Card>
                <CardHeader>
                  <CardTitle>1KG Gold Bar</CardTitle>
                  <CardDescription>99.99% Pure Gold</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold">$58,450 USD</p>
                  </div>
                  <div className="flex justify-end">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="1KG Gold Bar"
                      width={250}
                      height={150}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start space-x-4">
                  <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Buy</Button>
                  <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600">Sell</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="hkd">
              <Card>
                <CardHeader>
                  <CardTitle>1KG Gold Bar</CardTitle>
                  <CardDescription>99.99% Pure Gold</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold">456,910 HKD</p>
                  </div>
                  <div className="flex justify-end">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="1KG Gold Bar"
                      width={250}
                      height={150}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start space-x-4">
                  <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Buy</Button>
                  <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600">Sell</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="cny">
              <Card>
                <CardHeader>
                  <CardTitle>1KG Gold Bar</CardTitle>
                  <CardDescription>99.99% Pure Gold</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold">421,240 CNY</p>
                  </div>
                  <div className="flex justify-end">
                    <Image
                      src="/placeholder.svg?height=150&width=250"
                      alt="1KG Gold Bar"
                      width={250}
                      height={150}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start space-x-4">
                  <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Buy</Button>
                  <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600">Sell</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}