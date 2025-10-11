import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Card, Input, Textarea } from './index';
import './ContactForm.css';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  address: z.string().min(1, 'Address is required'),
  tel: z.string()
    .min(1, 'Phone number is required')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters')
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      alert('Thank you! Your message has been sent successfully.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="contact-form-container">
      {/* Main Contact Form */}
      <Card variant="form" className="contact-form-card">
        <div className="form-content">
          <h2 className="form-title">Contact Us</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            {/* Name Field */}
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <Input
                id="name"
                type="text"
                variant={errors.name ? 'error' : 'default'}
                placeholder="Enter your full name"
                {...register('name')}
              />
              {errors.name && (
                <p className="form-error">{errors.name.message}</p>
              )}
            </div>

            {/* Address Field */}
            <div className="form-field">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <Input
                id="address"
                type="text"
                variant={errors.address ? 'error' : 'default'}
                placeholder="Enter your address"
                {...register('address')}
              />
              {errors.address && (
                <p className="form-error">{errors.address.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="form-field">
              <label htmlFor="tel" className="form-label">
                Phone Number *
              </label>
              <Input
                id="tel"
                type="tel"
                variant={errors.tel ? 'error' : 'default'}
                placeholder="(555) 123-4567"
                {...register('tel')}
              />
              {errors.tel && (
                <p className="form-error">{errors.tel.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="form-field">
              <label htmlFor="message" className="form-label">
                Your Message *
              </label>
              <Textarea
                id="message"
                rows={4}
                variant={errors.message ? 'error' : 'default'}
                placeholder="Tell us how we can help you..."
                {...register('message')}
              />
              {errors.message && (
                <p className="form-error">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 'Sending...' : 'Send Form'}
            </Button>
          </form>
        </div>
      </Card>

      {/* Contact Information Section */}
      <div className="contact-info-section">
        <h3 className="contact-info-title">Get in Touch</h3>
        <div className="contact-info-list">
          <div className="contact-info-item">
            <span className="contact-info-icon">📍</span>
            <span className="contact-info-text">123 Main Street, City, State 12345</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">📞</span>
            <span className="contact-info-text">(555) 123-4567</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">✉️</span>
            <span className="contact-info-text">contact@company.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}