import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Badge } from './components/ui/badge';
import { Alert, AlertDescription } from './components/ui/alert';

export default function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            shadcn/ui Components Ready!
          </h1>
          <p className="text-muted-foreground">
            All shadcn/ui components are now available in your project
          </p>
          <Badge variant="secondary" className="text-sm">
            50+ Components Installed
          </Badge>
        </div>

        <Alert>
          <AlertDescription>
            🎉 Successfully installed all available shadcn/ui components! You can now use them in your project.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
              <CardDescription>
                Input, Label, Button, and Form components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <Button className="w-full">Submit</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>UI Components</CardTitle>
              <CardDescription>
                Cards, Badges, Alerts, and more
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="default" size="sm">Default</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Available Components</CardTitle>
            <CardDescription>
              All installed shadcn/ui components ready to use
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {[
                'Accordion', 'Alert', 'Avatar', 'Badge', 'Button', 'Calendar', 'Card', 'Carousel',
                'Chart', 'Checkbox', 'Command', 'Dialog', 'Drawer', 'Dropdown', 'Form', 'Hover Card',
                'Input', 'Label', 'Menu', 'Pagination', 'Popover', 'Progress', 'Radio',
                'Scroll Area', 'Select', 'Separator', 'Sheet', 'Sidebar', 'Skeleton', 'Slider', 'Switch',
                'Table', 'Tabs', 'Textarea', 'Toast', 'Toggle', 'Tooltip', 'And More...'
              ].map((component) => (
                <Badge key={component} variant="outline" className="text-xs justify-center">
                  {component}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}