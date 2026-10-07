# Campus Snack Bar POS

A simple point-of-sale system for a campus snack bar counter, built with plain HTML, internal CSS and JavaScript. It has no database, no frameworks and no build step. It works with both mouse and keyboard.

## How to Run

1. Unzip the project folder.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).

Keep the `images` and `js` folders next to the HTML pages.

## Project Structure

```
campus-snack-bar-pos/
├── index.html      Browse products and add to cart
├── cart.html       Review order and adjust quantities
├── payment.html    Enter cash amount, validate, compute change
├── confirm.html    Payment confirmation with transaction details
├── receipt.html    Digital receipt and New Transaction
├── js/
│   └── app.js      Shared menu data, cart logic, formatting, header
└── images/         Product images (SVG) and logo
```

Each page has its own internal `<style>` block. Shared logic lives in `js/app.js`.

## Transaction Flow

| Step | Page | What happens |
|------|------|--------------|
| 1. Browse Products | `index.html` | Shows each product's name, image and price |
| 2. Add to Cart | `index.html` | Add one or more items; a cart bar shows the item count and running total |
| 3. Review Order | `cart.html` | Items, quantities, subtotals and total; change quantity or remove items |
| 4. Enter Payment | `payment.html` | Type the cash amount into a numeric field (or use the quick-amount buttons) |
| 5. Validate & Compute | `payment.html` | Checks the amount and shows the change live |
| 6. Confirm Payment | `confirm.html` | Shows transaction number, date, items, total, cash and change |
| 7. Receipt / New Transaction | `receipt.html` | Digital receipt, printable; New Transaction clears the order |

## Menu

| Item | Price |
|------|-------|
| Classic Burger | ₱55.00 |
| Cheeseburger | ₱65.00 |
| Ham Sandwich | ₱40.00 |
| French Fries (Regular) | ₱45.00 |
| Nachos | ₱50.00 |
| Soda (Can) | ₱25.00 |

## Payment Validation

The Confirm Payment button stays disabled until the amount is valid. The system rejects:

- an empty field
- zero, negative or non-numeric values
- an amount less than the total (it shows how much is short)

## Keyboard Shortcuts

| Page | Key | Action |
|------|-----|--------|
| Menu | `1` to `6` | Add the matching item to the cart |
| Menu | `C` | Open the cart |
| Cart | `Enter` | Proceed to payment |
| Payment | `Enter` | Confirm payment |
| Confirmation | `Enter` | View receipt |
| Receipt | `N` | Start a new transaction |

## Data Storage

There is no database. The current cart and the latest transaction are kept in the browser's `localStorage` so they carry across pages. Starting a **New Transaction** clears both. The system does not keep a transaction history.

## Customizing the Menu

Edit the `MENU` array at the top of `js/app.js`:

```js
{id:7, name:"Iced Tea", price:30, img:"images/iced-tea.svg"}
```

Give each item a unique `id`, add its image to the `images` folder, and update the key list in `index.html` if you want a keyboard shortcut beyond `6`. Pages pick up the new item automatically.

## Notes

- Currency is formatted in Philippine pesos (₱).
- Product images are SVG files. You can replace them with photos by using the same filenames and updating the extension in `js/app.js`.
- Opening the pages from `file://` works; no server is required.
