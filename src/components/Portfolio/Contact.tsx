import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
<<<<<<< HEAD
      value: "siddharth43e@gmail.com",
      link: "mailto:siddharth43e@gmail.com"
=======
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
>>>>>>> edcb0f7bdc75bbdfe4e7656aeeee556200e1695b
    },
    {
      icon: Phone,
      label: "Phone",
<<<<<<< HEAD
      value: "+91 878782591",
      link: "tel:+918787825931"
=======
      value: "+91 12345 67890",
      link: "tel:+911234567890"
>>>>>>> edcb0f7bdc75bbdfe4e7656aeeee556200e1695b
    },
    {
      icon: MapPin,
      label: "Location",
<<<<<<< HEAD
      value: "Meghalaya, India",
=======
      value: "Your City, India",
>>>>>>> edcb0f7bdc75bbdfe4e7656aeeee556200e1695b
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
<<<<<<< HEAD
      url: "https://github.com/siddharth-0903/",
=======
      url: "https://github.com/yourusername",
>>>>>>> edcb0f7bdc75bbdfe4e7656aeeee556200e1695b
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
<<<<<<< HEAD
      url: "https://www.linkedin.com/in/siddharth-goswami-/",
=======
      url: "https://linkedin.com/in/yourprofile",
>>>>>>> edcb0f7bdc75bbdfe4e7656aeeee556200e1695b
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
<<<<<<< HEAD
      url: "https://twitter.com/SiddharthPradi1",
=======
      url: "https://twitter.com/yourusername",
>>>>>>> edcb0f7bdc75bbdfe4e7656aeeee556200e1695b
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a 
                        href={info.link}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-md ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow me on social media for updates on my latest projects and tech insights.
                </p>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-card bg-gradient-hero border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Available for Opportunities
                </h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently open to internships, entry-level positions, and freelance projects. 
                  Let's discuss how I can contribute to your team!
                </p>
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto animate-pulse"></div>
                <p className="text-sm text-green-600 font-medium mt-2">Available Now</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;