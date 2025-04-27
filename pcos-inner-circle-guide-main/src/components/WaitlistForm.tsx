import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const WaitlistForm: React.FC = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      toast({
        title: "Please check your submission",
        description: "Please fill in both your username and password.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('http://localhost:3000/api/join-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Successfully joined!",
          description: "We'll keep you updated.",
        });
        setUsername('');
        setPassword('');
      } else {
        toast({
          title: "Submission failed",
          description: data.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Could not connect to server.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="waitlist" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-pcos-lavender/20 rounded-lg p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Join the Inner Circle</h2>
            <p className="text-gray-600">
              Create your username and password to join our waitlist.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username" className="text-gray-700">Username *</Label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700">Password *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-pcos-purple hover:bg-pcos-purple/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
