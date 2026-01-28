import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

function StackedCircularFooter() {
    return (
        <footer className="bg-neutral-950 py-12 border-t border-neutral-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center">
                    <div className="mb-8 rounded-full bg-neutral-800 p-6">
                        <Icons.logo className="w-8 h-8 text-white" />
                    </div>
                    <nav className="mb-8 flex flex-wrap justify-center gap-6 text-neutral-400">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
                        <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </nav>
                    <div className="mb-8 flex space-x-4">
                        <Button variant="outline" size="icon" className="rounded-full border-neutral-700 bg-transparent hover:bg-neutral-800 text-neutral-400 hover:text-white">
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-neutral-700 bg-transparent hover:bg-neutral-800 text-neutral-400 hover:text-white">
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-neutral-700 bg-transparent hover:bg-neutral-800 text-neutral-400 hover:text-white">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full border-neutral-700 bg-transparent hover:bg-neutral-800 text-neutral-400 hover:text-white">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                        </Button>
                    </div>
                    <div className="mb-8 w-full max-w-md">
                        <form className="flex flex-col sm:flex-row gap-2">
                            <div className="flex-grow">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="rounded-full bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-neutral-500"
                                />
                            </div>
                            <Button type="submit" className="rounded-full bg-white text-black hover:bg-neutral-200">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-neutral-500">
                            © 2024 Your Name. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { StackedCircularFooter }
