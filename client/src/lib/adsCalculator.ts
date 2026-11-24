// Maths behind the ads profit calculator at /roas-calculator/.
//
// Current revenue ─► commission rate
// AOV + margin + goal ─► break-even ROAS ─► profitability floor (+10%)
// Budget × ROAS ─► ad revenue ─► fee (only at or above the floor),
//                                 profit, new customers and CAC

export type Goal = "profit" | "growth";

export type CalcInput = {
  /** Current monthly online revenue, £. */
  revenue: number;
  /** Average order value, £. */
  aov: number;
  /** Gross margin as a fraction, e.g. 0.5. */
  margin: number;
  goal: Goal;
  /** Average orders per customer in 12 months (growth mode only). */
  ordersPerCustomer: number;
  /** Monthly ad budget, £. */
  budget: number;
  /** Expected return per £1 of ad spend. */
  roas: number;
};

export type CalcResult = {
  /** Commission as a fraction, e.g. 0.07. */
  rate: number;
  /** AOV in profit mode, 12-month value (AOV × orders) in growth mode. */
  customerValue: number;
  /** Margin at or below the commission rate: ads can't pay for themselves. */
  marginTooLow: boolean;
  /** null when no ROAS can break even. */
  breakEvenRoas: number | null;
  floor: number | null;
  adRevenue: number;
  aboveFloor: boolean;
  fee: number;
  newCustomers: number;
  /** Cost per new customer; null when the ads bring no customers. */
  cac: number | null;
  firstOrderProfit: number;
  /** Growth mode only. */
  yearProfit: number | null;
};

export const FLOOR_SAFETY_MARGIN = 1.1;

/** 7% under £10,000 a month, 5% from £10,000 to £30,000, 3% above. */
export function commissionRate(revenue: number) {
  if (revenue < 10_000) return 0.07;
  if (revenue <= 30_000) return 0.05;
  return 0.03;
}

export function calculate(i: CalcInput): CalcResult {
  const rate = commissionRate(i.revenue);
  const orders = i.goal === "growth" ? i.ordersPerCustomer : 1;
  // The commission is paid on ad revenue, which is mostly first orders.
  // Repeat orders arrive through email and organic, without extra commission.
  const perPound = i.margin * orders - rate;
  const breakEvenRoas = perPound > 0 ? 1 / perPound : null;
  const floor =
    breakEvenRoas === null ? null : breakEvenRoas * FLOOR_SAFETY_MARGIN;

  const adRevenue = i.budget * i.roas;
  const aboveFloor = floor !== null && i.roas >= floor;
  const fee = aboveFloor ? adRevenue * rate : 0;
  const newCustomers = i.aov > 0 ? adRevenue / i.aov : 0;

  return {
    rate,
    customerValue: i.aov * orders,
    marginTooLow: i.margin <= rate,
    breakEvenRoas,
    floor,
    adRevenue,
    aboveFloor,
    fee,
    newCustomers,
    cac: newCustomers > 0 ? i.budget / newCustomers : null,
    firstOrderProfit: adRevenue * i.margin - i.budget - fee,
    yearProfit:
      i.goal === "growth"
        ? adRevenue * i.margin * orders - i.budget - fee
        : null,
  };
}
