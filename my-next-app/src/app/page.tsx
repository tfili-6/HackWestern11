import Image from "next/image";
import WesternLogo from "../../public/western-logo.png";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

interface Category {
  name: string;
  count: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="text-center p-6 rounded-xl bg-white shadow-sm">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const categories: Category[] = [
  { name: "Electronics", count: "1,234", icon: "📱" },
  { name: "Furniture", count: "856", icon: "🪑" },
  { name: "Vehicles", count: "643", icon: "🚗" },
  { name: "Fashion", count: "2,156", icon: "👕" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <header className="bg-purple-900 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <nav className="flex space-x-6 text-white">
              <a href="#" className="hover:text-purple-200">
                Home
              </a>
              <a href="#" className="hover:text-purple-200">
                Browse
              </a>
              <a href="#" className="hover:text-purple-200">
                Categories
              </a>
              <a href="#" className="hover:text-purple-200">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Amazing Items Near You
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Buy and sell items from your local community. Find great deals
                on what you need or sell items you don't.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                  Start Selling
                </button>
                <button className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition border border-purple-400">
                  Browse Items
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="w-[500px] h-[500px] relative">
                <Image
                  src={WesternLogo}
                  alt="Western University Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition cursor-pointer"
              >
                <div className="text-purple-600 mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Why Choose Our Marketplace
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Safe & Secure"
              description="Verified buyers and sellers with secure payment processing"
              icon="🔒"
            />
            <FeatureCard
              title="Local Community"
              description="Connect with sellers and buyers in your area"
              icon="🏠"
            />
            <FeatureCard
              title="Easy to Use"
              description="Simple listing process and intuitive interface"
              icon="👌"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
