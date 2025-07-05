import { fetchJson } from '../api';

export interface InventoryByCategory {
  category: string;
  count: number;
}

export interface OrderStatusData {
  status: string;
  count: number;
}

export interface RecentActivity {
  id: string;
  action: string;
  item: string;
  quantity: number;
  timestamp: string;
}

export interface LowStockItem {
  id: string;
  name: string;
  currentStock: number;
  minStock: number;
  reorderQuantity: number;
}

export interface DashboardData {
  totalSKUs: number;
  totalItems: number;
  inventoryValue: number;
  pendingOrders: number;
  lowStockItems: number;
  criticalAlerts: number;
  inventoryByCategory: InventoryByCategory[];
  orderStatusData: OrderStatusData[];
  recentActivities: RecentActivity[];
  lowStockList: LowStockItem[];
}

export async function fetchDashboard(): Promise<DashboardData> {
  return fetchJson<DashboardData>('/dashboard');
}
