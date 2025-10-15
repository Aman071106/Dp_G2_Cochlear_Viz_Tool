import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Brain } from "lucide-react";

export default function AnimationSection() {
  return (
    <div className="space-y-6">
      {/* 3D Animation Video */}
      <div className="aspect-video w-full max-w-4xl mx-auto">
        <iframe
          className="w-full h-full rounded-lg border border-border"
          src="https://www.youtube.com/embed/eQEaiZ2j9oc"
          title="3D Animation of Inner Ear Mechanics"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid="iframe-3d-animation-video"
        />
      </div>

      {/* Research Papers Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Research Papers & Further Reading
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div className="flex-1">
                <h4 className="font-medium mb-1">
                  Mathematics of the Response of the Inner Hair Cell Stereocilia
                  Bundle
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A comprehensive study on how inner hair cell stereocilia
                  bundles respond to acoustical stimuli, including fluid
                  dynamics and mechanical interactions.
                </p>
                <a
                  href="https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0018161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  Read Full Paper
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div className="flex-1">
                <h4 className="font-medium mb-1">
                  Inner Ear Mechanics and Cochlear Function
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Advanced research on the mechanical properties of the cochlea
                  and how it processes different frequencies through place
                  coding and temporal mechanisms.
                </p>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8357788/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  Read Full Paper
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <Card>
        <CardHeader>
          <CardTitle>Key Concepts Demonstrated</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Fluid Dynamics</h4>
              <p className="text-sm text-muted-foreground">
                How sound waves create fluid motion within the cochlea
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Hair Cell Activation</h4>
              <p className="text-sm text-muted-foreground">
                The mechanical-to-electrical transduction process
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Frequency Analysis</h4>
              <p className="text-sm text-muted-foreground">
                How different frequencies are processed along the cochlea
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Neural Coding</h4>
              <p className="text-sm text-muted-foreground">
                The conversion of mechanical signals to neural impulses
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
