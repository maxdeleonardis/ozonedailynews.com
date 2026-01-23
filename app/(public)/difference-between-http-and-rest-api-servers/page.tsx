import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Difference between HTTP and REST API servers - ObjectWire.org",
  description: "An HTTP server handles requests and responses using the Hypertext Transfer Protocol, the foundation of web communication. It listens for client connections, processes incoming data, and sends back content.",
  alternates: {
    canonical: 'https://www.objectwire.org/difference-between-http-and-rest-api-servers',
  },
};

export default function HttpVsRestApiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">6 days ago | Technical</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Difference between HTTP and REST API Servers
          </h1>
          <p className="text-xl text-gray-600">
            Understanding the fundamental differences and use cases
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What is an HTTP Server?
            </h2>
            <p className="text-gray-700 mb-4">
              An HTTP server handles requests and responses using the Hypertext Transfer Protocol, 
              the foundation of web communication. It listens for client connections, processes 
              incoming data, and sends back content like web pages, images, or files. Popular 
              examples include Apache, Nginx, and Node.js's built-in HTTP module.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm mb-2">
                <strong>Key Point:</strong> HTTP is a protocol (a set of rules), not a specific 
                type of server. Any server that communicates using HTTP is an "HTTP server."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What is a REST API Server?
            </h2>
            <p className="text-gray-700 mb-4">
              A REST API server is a specific type of HTTP server that follows REST (Representational 
              State Transfer) architectural principles. It provides programmatic access to resources 
              through standardized HTTP methods and structured data formats (usually JSON).
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm mb-2">
                <strong>Important:</strong> All REST API servers are HTTP servers, but not all HTTP 
                servers are REST API servers. REST is an architectural style built on top of HTTP.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Differences
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Purpose & Use Case</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">HTTP Server</h4>
                    <p className="text-gray-700 text-sm">
                      Serves any content over HTTP: websites, files, images, videos. Can handle 
                      any type of request-response pattern.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">REST API Server</h4>
                    <p className="text-gray-700 text-sm">
                      Specifically designed for programmatic access to data and services. Focuses 
                      on CRUD operations and resource manipulation.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Response Format</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">HTTP Server</h4>
                    <p className="text-gray-700 text-sm">
                      Returns any content type: HTML, CSS, JavaScript, images, PDFs, etc. 
                      Content-Type varies by resource.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">REST API Server</h4>
                    <p className="text-gray-700 text-sm">
                      Typically returns structured data in JSON or XML format. Consistent, 
                      machine-readable responses.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. URL Structure</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">HTTP Server</h4>
                    <div className="text-gray-700 text-sm space-y-1">
                      <p>Can be anything:</p>
                      <code className="block bg-white p-2 rounded text-xs">
                        /about.html<br/>
                        /contact-us<br/>
                        /images/logo.png
                      </code>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">REST API Server</h4>
                    <div className="text-gray-700 text-sm space-y-1">
                      <p>Resource-oriented:</p>
                      <code className="block bg-white p-2 rounded text-xs">
                        /api/users<br/>
                        /api/users/123<br/>
                        /api/posts/456/comments
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. HTTP Methods Usage</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">HTTP Server</h4>
                    <p className="text-gray-700 text-sm">
                      Often uses just GET and POST. Methods may not follow semantic meaning.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">REST API Server</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Uses HTTP methods semantically:
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• GET - Read resources</li>
                      <li>• POST - Create resources</li>
                      <li>• PUT/PATCH - Update resources</li>
                      <li>• DELETE - Remove resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Code Examples
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Basic HTTP Server (Node.js)</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto"><code>{`const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve HTML page
    const html = fs.readFileSync('index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/style.css') {
    // Serve CSS file
    const css = fs.readFileSync('style.css');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(css);
  }
});

server.listen(3000);`}</code></pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">REST API Server (Express)</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto"><code>{`const express = require('express');
const app = express();

app.use(express.json());

// GET - Read all users
app.get('/api/users', (req, res) => {
  res.json({ users: [...] });
});

// GET - Read specific user
app.get('/api/users/:id', (req, res) => {
  const user = findUser(req.params.id);
  res.json({ user });
});

// POST - Create new user
app.post('/api/users', (req, res) => {
  const newUser = createUser(req.body);
  res.status(201).json({ user: newUser });
});

// PUT - Update user
app.put('/api/users/:id', (req, res) => {
  const updated = updateUser(req.params.id, req.body);
  res.json({ user: updated });
});

// DELETE - Remove user
app.delete('/api/users/:id', (req, res) => {
  deleteUser(req.params.id);
  res.status(204).end();
});

app.listen(3000);`}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              REST API Principles
            </h2>
            <p className="text-gray-700 mb-4">
              For an HTTP server to be a true REST API, it should follow these principles:
            </p>
            <div className="space-y-3">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-1">1. Stateless</h3>
                <p className="text-gray-700 text-sm">
                  Each request contains all information needed. Server doesn't store client state 
                  between requests.
                </p>
              </div>
              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-1">2. Resource-Based</h3>
                <p className="text-gray-700 text-sm">
                  URLs represent resources (nouns), not actions (verbs). Use HTTP methods for actions.
                </p>
              </div>
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-1">3. Uniform Interface</h3>
                <p className="text-gray-700 text-sm">
                  Consistent patterns across all endpoints. Predictable structure and behavior.
                </p>
              </div>
              <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-1">4. Client-Server Separation</h3>
                <p className="text-gray-700 text-sm">
                  Client and server evolve independently. Interface remains stable.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              When to Use Each
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Use a Traditional HTTP Server When:</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>✓ Serving a traditional website with HTML pages</li>
                  <li>✓ Delivering static files (images, CSS, JavaScript)</li>
                  <li>✓ Building server-rendered applications (SSR)</li>
                  <li>✓ Simple file serving or content delivery</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Use a REST API Server When:</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>✓ Building backends for mobile apps</li>
                  <li>✓ Creating APIs for SPA (React, Vue, Angular)</li>
                  <li>✓ Enabling third-party integrations</li>
                  <li>✓ Microservices architecture</li>
                  <li>✓ Data-driven applications requiring CRUD operations</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Summary
            </h2>
            <p className="text-gray-700 mb-4">
              The main difference is architectural: HTTP servers can serve any content in any way, 
              while REST API servers follow specific architectural constraints to provide 
              standardized, programmatic access to resources.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>HTTP Server:</strong> General-purpose web server using HTTP protocol</li>
              <li>• <strong>REST API Server:</strong> Specialized HTTP server following REST principles</li>
              <li>• Both use HTTP, but REST adds structure and conventions</li>
              <li>• Modern applications often combine both (serve website + provide API)</li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  );
}
