"use client";

import { useEffect, useState } from "react";
import Topbar from "../../components/Header/Topbar";
import FilterBar from "../../components/Header/FilterBar";
import Table from "../../components/InventoryTable/Table";
import { getItems } from "../../lib/api";

export default function InventoryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await getItems();
        // Handle if API returns { items: [...] } or just [...]
        const list = Array.isArray(data) ? data : data.items || [];
        setItems(list);
      } catch (e) {
        console.error("Failed to load items", e);
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Topbar />
      <FilterBar />
      <div style={{ padding: "0", flex: 1, overflowY: "auto" }}>
        {loading ? (
          <div
            style={{ padding: "40px", textAlign: "center", color: "#6b7280" }}
          >
            Loading inventory...
          </div>
        ) : (
          <Table items={items} />
        )}
      </div>
    </div>
  );
}
