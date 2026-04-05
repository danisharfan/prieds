import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { ChevronDown, Search } from "lucide-react";


interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Posts",
    "Business",
    "Digital",
    "Product Knowledge",
    "Supply Chain",
    "Technology",
    "Lainnya"
  ];

  const popularPosts = [
    {
      title: "Twin Inventory: Definisi, Fungsi & Penerapan pada Manajemen Warehouse",
      number: 1
    },
    {
      title: "Loose Item: Pengertian, Fungsi dan Cara Pengelolaan dalam Gudang",
      number: 2
    },
    {
      title: "Perishable Stock: Definisi, Fungsi, Tantangan dan Cara Optimalisasi",
      number: 3
    },
    {
      title: "Reversal Entry: Pengertian, Fungsi, Jenis dan Cara Penerapannya",
      number: 4
    },
    {
      title: "Inventory Freeze: Definisi, Fungsi & Penerapan pada Manajemen Warehouse",
      number: 5
    }
  ];

 const blogPosts = [
    {
      id: 1,
      title: "Discrepancy Analysis: Definisi, Fungsi & Penerapannya dalam Gudang",
      excerpt: "Discrepancy Analysis membantu identifikasi dan perbaiki selisih stok dalam pengelolaan stok. Optimalkan prosesnya dengan Sistem Gudang Prieds.",
      author: "Kevin Ramadhani",
      date: "2 hari yang lalu",
      readTime: "3 menit",
      tags: ["prieds", "STumbuh"],
      category: "Supply Chain",
      image: blog1
    },
    {
      id: 2,
      title: "Return Stock Count: Definisi, Fungsi & Penerapan pada Manajemen Gudang",
      excerpt: "Return Stock Count memastikan akurasi data dan proses pengembalian barang yang efisien. Optimalkan prosesnya dengan Sistem RFID dan WMS Prieds.",
      author: "Kevin Ramadhani",
      date: "3 hari yang lalu",
      readTime: "4 menit",
      tags: ["prieds", "STumbuh"],
      category: "Technology",
      image: blog2
    },
    {
      id: 3,
      title: "Lean Stocktaking: Pengertian, Fungsi dan Cara Pengelolaan dalam Gudang",
      excerpt: "Tingkatkan efisiensi dan akurasi pengelolaan gudang dengan Lean Stocktaking. Optimalkan penerapannya melalui Warehouse Management Software.",
      author: "Kevin Ramadhani",
      date: "5 hari yang lalu",
      readTime: "5 menit",
      tags: ["prieds", "STumbuh"],
      category: "Product Knowledge",
      image: blog3
    },
    {
      id: 4,
      title: "Recount Accuracy Rate: Arti, Fungsi, Cara Menghitung & Hal yang Mempengaruhi",
      excerpt: "Tingkatkan akurasi data stok melalui Recount Accuracy Rate dan optimalkan pengelolaan gudang menggunakan RFID dan Sistem Inventory Prieds.",
      author: "Kevin Ramadhani",
      date: "6 hari yang lalu",
      readTime: "4 menit",
      tags: ["prieds"],
      category: "Business",
      image: blog1
    },
    {
      id: 5,
      title: "Stock Adjustment Ratio: Arti, Fungsi, Cara Pengelolaan & Optimalisasinya",
      excerpt: "Tingkatkan akurasi stok dan kurangi selisih jumlah stok dengan penerapan Stock Adjustment Ratio dengan dukungan RFID dan Software Stock Opname.",
      author: "Kevin Ramadhani",
      date: "1 minggu yang lalu",
      readTime: "4 menit",
      tags: ["prieds"],
      category: "Digital",
      image: blog2
    },
    {
      id: 6,
      title: "Twin Inventory: Definisi, Fungsi & Penerapan pada Manajemen Warehouse",
      excerpt: "Twin Inventory membantu menciptakan gambaran digital dari stok fisik agar data stok akurat, real-time, dan efisien melalui RFID serta WMS.",
      author: "Kevin Ramadhani",
      date: "1 minggu yang lalu",
      readTime: "5 menit",
      tags: ["prieds", "STumbuh"],
      category: "Technology",
      image: blog3
    },
    {
      id: 7,
      title: "Partnership Opportunities in Warehouse Management",
      excerpt: "Explore strategic partnership opportunities to enhance your warehouse operations and supply chain efficiency.",
      author: "Kevin Ramadhani",
      date: "2 minggu yang lalu",
      readTime: "6 menit",
      tags: ["prieds"],
      category: "Partnership",
      image: blog1
    },
    {
      id: 8,
      title: "Financial Planning for Warehouse Investment",
      excerpt: "Learn how to effectively plan and manage your warehouse investment budget for optimal returns.",
      author: "Kevin Ramadhani",
      date: "2 minggu yang lalu",
      readTime: "5 menit",
      tags: ["prieds"],
      category: "Financial",
      image: blog2
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All Posts" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  }); 
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const BlogCard = ({ title, excerpt, author, date, readTime, tags, image }: BlogCardProps) => (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-medium">{author}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-center">
            Blog
          </h1>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <div className="">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3 relative">

            {/* LEFT — CATEGORIES */}
            <div className="flex gap-3 flex-wrap justify-center">
              {categories
                .filter((c) => c !== "Lainnya")
                .map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => handleCategoryChange(category)}
                    className="whitespace-nowrap rounded-full"
                  >
                    {category}
                  </Button>
                ))}

              {/* Lainnya Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={activeCategory === "Lainnya" ? "default" : "outline"}
                    className="rounded-full flex items-center gap-1"
                  >
                    Lainnya <ChevronDown size={14} />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-48">
                  {["Uncategorized", "Partnership", "Financial"].map((sub) => (
                    <DropdownMenuItem
                      key={sub}
                      onClick={() => handleCategoryChange(sub)}
                    >
                      {sub}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* RIGHT — SEARCH BAR */}
            <div className="hidden md:block">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-border rounded-full bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* BLOG CONTENT SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* IMAGE */}
                  <div className="md:w-72 h-48 md:h-auto flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    {/* HEADER */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src="src/assets/kevin-profile.avif"
                        alt="Kevin Ramadhan"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">Kevin Ramadhan</p>
                        <p className="text-xs text-muted-foreground">
                          {post.date} · {post.readTime}
                        </p>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
                        </svg>
                      </button>
                    </div>

                    {/* TITLE & EXCERPT */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 hover:text-primary cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* CATEGORY TAG */}
                    <div className="flex justify-center">
                      <span className="inline-block px-3 py-1 bg-muted text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;