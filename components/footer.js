import React from "react";

export default function Footer() {
  return (
    <div className="relative">
      <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
        Copyright © {new Date().getFullYear()}. Made with ♥ by Samarth Saxena and
        Pragyanaaditya Borah
      </div>
    </div>
  );
}
