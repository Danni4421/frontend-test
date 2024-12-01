import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-base mt-24 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">DataKu</h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit aliquam
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Produk */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Paket Data
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Internet
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pulsa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Top Up Game
                </a>
              </li>
            </ul>
          </div>

          {/* Kategori */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Penawaran Terbaik
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Hot Promo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Paket Sakti
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Paket Super Hemat
                </a>
              </li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">contact@company.com</li>
              <li className="text-gray-400">(414) 687 - 5892</li>
              <li className="text-gray-400">Surabaya</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2024 DataKu - All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms and Conditions
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
