"use client";

import { useEffect, useState } from "react";
import Topbar from "../../components/Header/Topbar";
import FilterBar from "../../components/Header/FilterBar";
import Table from "../../components/InventoryTable/Table";
import Pagination from "../../components/InventoryTable/Pagination";
import { getItems } from "../../lib/api";

const ITEMS_PER_PAGE = 8;

export default function InventoryPage() {
  const [allItems, setAllItems] = useState([]); // Store all fetched items
  const [displayedItems, setDisplayedItems] = useState([]); // Items for current page
  const [loading, setLoading] = useState(true);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await getItems();
        const list = Array.isArray(data) ? data : data.items || [];
        setAllItems(list);
      } catch (e) {
        console.error("Failed to load items", e);
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  // Handle Filtering and Pagination
  useEffect(() => {
    let filtered = allItems;

    // Search Logic
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          (item.name && item.name.toLowerCase().includes(query)) ||
          (item.model && item.model.toLowerCase().includes(query)) ||
          (item.location && item.location.toLowerCase().includes(query))
      );
    }

    setTotalItems(filtered.length);

    // Pagination Logic
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    setDisplayedItems(filtered.slice(startIdx, endIdx));
  }, [allItems, searchQuery, currentPage]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to page 1 on search
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalItems / ITEMS_PER_PAGE)) {
      setCurrentPage(newPage);
    }
  };

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Topbar onSearch={handleSearch} />
      <FilterBar totalItems={totalItems} />
      <div
        style={{
          padding: "0",
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {loading ? (
          <div
            style={{ padding: "40px", textAlign: "center", color: "#6b7280" }}
          >
            Loading inventory...
          </div>
        ) : (
          <>
            <Table items={displayedItems} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
