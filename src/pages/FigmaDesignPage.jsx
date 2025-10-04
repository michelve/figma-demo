import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { 
  Field, 
  FieldLabel, 
  FieldDescription, 
  FieldGroup 
} from '../components/ui/field';

/**
 * Page built from Figma design: node-id=109-1005
 * Contact form with inputs and textarea
 * Using connected shadcn/ui components
 */
export default function FigmaDesignPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="bg-slate-200 rounded-lg p-4 space-y-6">
            <FieldGroup className="space-y-2">
              {/* Name Field */}
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input 
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  className="bg-white"
                />
                <FieldDescription>
                  Enter your email address
                </FieldDescription>
              </Field>

              {/* Address Field */}
              <Field>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input 
                  id="address"
                  type="text"
                  placeholder="Full Address"
                  className="bg-white"
                />
                <FieldDescription>
                  USA address only
                </FieldDescription>
              </Field>

              {/* Tel Field */}
              <Field>
                <FieldLabel htmlFor="tel">Tel</FieldLabel>
                <Input 
                  id="tel"
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white"
                />
                <FieldDescription>
                  Format: 561-658-9865
                </FieldDescription>
              </Field>

              {/* Message Field */}
              <Field>
                <FieldLabel htmlFor="message">Your message</FieldLabel>
                <Textarea 
                  id="message"
                  placeholder="Type your message here"
                  className="bg-white min-h-[80px]"
                />
                <FieldDescription>
                  Your message will be copied to the support team.
                </FieldDescription>
              </Field>
            </FieldGroup>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="bg-slate-900 hover:bg-slate-800"
            >
              Send Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}


