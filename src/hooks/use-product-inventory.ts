type InventoryStatus = "in-stock" | "low-stock" | "waitlist";

type InventoryResponse = {
  status: InventoryStatus;
  eta: string;
};

const DEFAULT_INVENTORY: InventoryResponse = {
  status: "in-stock",
  eta: "Ships in 2 days",
};

/**
 * Returns inventory status for a product.
 * Currently returns static data. Can be extended to fetch from an API in the future.
 * @param slug - Product slug (currently unused, reserved for future API integration)
 */
export const useProductInventory = (slug: string): InventoryResponse => {
  // Return static inventory data
  // In the future, this could fetch from an API or database using the slug
  void slug; // Reserved for future use
  return DEFAULT_INVENTORY;
};

