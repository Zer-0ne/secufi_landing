# API Setup for Advisor Signup

## Environment Configuration

Create a `.env` file in the root directory with the following variable:

```env
VITE_SERVER_URL=http://your-server-url:port
```

## API Endpoint

The advisor signup form submits data to:

```
${VITE_SERVER_URL}/api/admin/partners/signup-request/
```

## Request Format

```typescript
{
  name: string;
  email: string;
  phone: string;
  role: string;
  company_name?: string;
  additional_info?: string;
}
```

## Role Options (mapped from advisorType)

- `MUTUAL_FUND_DISTRIBUTOR` - Mutual Fund Distributor (MFD)
- `CHARTERED_ACCOUNTANT` - Chartered Accountant (CA)
- `FINANCIAL_PLANNER` - Financial Planner
- `INSURANCE_ADVISOR` - Insurance Advisor
- `Other` - Other

## Implementation Details

- The API utility is located at `src/utils/api.ts`
- The advisor signup component is at `src/pages/AdvisorSignup.tsx`
- Form validation and error handling are implemented
- Success state redirects users appropriately