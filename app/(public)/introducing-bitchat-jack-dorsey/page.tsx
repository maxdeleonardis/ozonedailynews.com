import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BitChat : Jack Dorsey's Bluetooth Mesh Offline Messaging App - ObjectWire.org",
  description: "Jack Dorsey unveils BitChat, a revolutionary Bluetooth mesh networking app enabling offline messaging without internet connectivity.",
};

export default function BitChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-500 mb-2">July 13, 2025</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BitChat: Jack Dorsey's Bluetooth Mesh Offline Messaging App
          </h1>
          <p className="text-xl text-gray-600">
            Revolutionary mesh networking technology for communication without internet
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introducing BitChat
            </h2>
            <p className="text-gray-700 mb-4">
              Jack Dorsey, co-founder of Twitter and Block (formerly Square), has unveiled BitChat—a 
              Bluetooth mesh offline messaging app that enables communication without internet 
              connectivity. The app represents a fundamental shift in how people can stay connected 
              in areas with limited infrastructure or during emergencies.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-700 mb-4">
              BitChat uses Bluetooth Low Energy (BLE) to create a mesh network between nearby devices. 
              Messages hop from phone to phone until they reach their intended recipient, similar to 
              how the internet routes data packets.
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">Mesh Networking</h3>
                <p className="text-gray-700 text-sm">
                  Each device acts as a node, relaying messages to extend range beyond direct Bluetooth reach
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">No Internet Required</h3>
                <p className="text-gray-700 text-sm">
                  Works completely offline, making it ideal for areas with poor connectivity or censorship
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-1">End-to-End Encryption</h3>
                <p className="text-gray-700 text-sm">
                  All messages are encrypted, ensuring privacy even as they pass through multiple devices
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Features
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Offline messaging via Bluetooth mesh network</li>
              <li>• No phone number or email required</li>
              <li>• Open-source protocol</li>
              <li>• Bitcoin integration for payments</li>
              <li>• Group messaging support</li>
              <li>• Ephemeral messages (disappear after delivery)</li>
              <li>• Cross-platform compatibility (iOS and Android)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Communication</h3>
                <p className="text-gray-700 text-sm">
                  Stay connected during natural disasters when infrastructure fails
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Protests & Activism</h3>
                <p className="text-gray-700 text-sm">
                  Coordinate without risk of internet shutdowns or surveillance
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Remote Areas</h3>
                <p className="text-gray-700 text-sm">
                  Connect in rural or developing regions with limited connectivity
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Privacy-Conscious Users</h3>
                <p className="text-gray-700 text-sm">
                  Communicate without centralized servers or data collection
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Limitations
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Range depends on device density (more users = better coverage)</li>
              <li>• Message delivery not guaranteed in sparse networks</li>
              <li>• Battery consumption from constant Bluetooth operation</li>
              <li>• Limited to text and small file transfers</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Dorsey's Vision
            </h2>
            <p className="text-gray-700">
              BitChat aligns with Jack Dorsey's broader philosophy of decentralization and individual 
              empowerment. By removing dependence on centralized infrastructure and corporate platforms, 
              BitChat aims to create truly censorship-resistant communication—a digital public square 
              that can't be shut down by governments or corporations.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Availability
            </h2>
            <p className="text-gray-700 mb-4">
              BitChat is currently in beta testing with plans for a public release in late 2025. 
              The app will be free and open-source, allowing community development and auditing of 
              the security protocols.
            </p>
            <p className="text-gray-700">
              Early adopters can join the waitlist at the official website to receive access to 
              the beta program.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
