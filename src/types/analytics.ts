export interface PersonalAnalytics {
  total_spent: number;
  expense_count: number;
  spending_by_category: Record<string, number>;
}

export type GroupBalances = Record<string, string>;
