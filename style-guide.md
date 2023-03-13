# StyleGuide Documetation

Type System Used - **Perfect Fourth**

## Google Fonts
```html
<!-- Font-Family (https://fonts.google.com/specimen/Kumbh+Sans)-->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet">
```

## Typography 
```css

/* Font-Family */
--ff-Kumbh-Sans: 'Kumbh Sans', sans-serif;

/* Font-weight */
--fw-400: 400; 
--fw-700: 700; 

/* Line-height */
--line-height-none: 1; 
--line-height-tight: 1.25; 
--line-height-snug: 1.375; 
--line-height-normal: 1.5; 
--line-height-relaxed: 1.625; 
--line-height-loose: 2; 


/* Letter spacing */
--letter-spacing-tighter: -0.05em; 
--letter-spacing-tight: -0.025em; 
--letter-spacing-normal: 0em; 
--letter-spacing-wide: 0.025em; 
--letter-spacing-wider: 0.05em; 
--letter-spacing-widest: 0.1em; 


/* Font-Size */
--fs-1: clamp(1.2rem, calc(1.04rem + 0.66vw), 2.0rem);
--fs-2: clamp(1.6rem, calc(1.392rem + 0.88vw), 2.672rem);
--fs-3: clamp(2.128rem, calc(1.856rem + 1.18vw), 3.552rem);
```

## Gradient
```css
--linear-gradient: linear-gradient(180deg, var(--soft-violet), var(--soft-blue)); 
```

## Rounded Corners
```css
--radius-1: 2px; 
--radius-2: 4px; 
--radius-3: 6px;
--radius-4: 8px; 
--radius-5: 12px; 
--radius-6: 16px; 
--radius-7: 20px; 
--radius-7: 22px;
--radius-8: 24px; 
--radius-9: 26px; 
--radius-10: 28px; 
--radius-11: 30px; 
--radius-12: 32px; 
--radius-13: 34px; 
--radius-14: 36px; 
--radius-15: 38px; 
--radius-16: 40px; 
```

## Space 
```css
--space-1: clamp(0.304rem, calc(0.256rem + 0.17vw), 0.496rem);
--space-2: clamp(0.608rem, calc(0.528rem + 0.33vw), 1.008rem);
--space-3: clamp(0.896rem, calc(0.784rem + 0.50vw), 1.504rem);
--space-4: clamp(1.20rem, calc(1.04rem + 0.66vw), 2.00rem);
--space-5: clamp(1.808rem, calc(1.568rem + 0.99vw), 3.01rem);
--space-6: clamp(2.4rem, calc(2.096rem + 1.32vw), 4.00rem);
--space-7: clamp(3.6rem, calc(3.136rem + 1.98vw), 6.00rem);
--space-8: clamp(4.8rem, calc(4.192rem + 2.64vw), 8.00rem);
--space-9: clamp(7.2rem, calc(6.288rem + 3.97vw), 12rem);
--space-10: clamp(0.304rem, calc(0.16rem + 0.58vw), 1.008rem);
--space-11: clamp(0.608rem, calc(0.432rem + 0.74vw), 1.504rem);
--space-12: clamp(0.896rem, calc(0.688rem + 0.91vw), 2.0rem);
--space-13: clamp(1.20rem, calc(0.864rem + 1.49vw), 3.01rem);
--space-14: clamp(1.808rem, calc(1.376rem + 1.82vw), 4.0rem);
--space-15: clamp(2.40rem, calc(1.712rem + 2.98vw), 6.00rem);
--space-16: clamp(3.6rem, calc(2.768rem + 3.64vw), 8.00rem);
--space-17: clamp(4.8rem, calc(3.424rem + 5.95vw), 12rem);
--space-18: clamp(1.2rem, calc(0.672rem + 2.31vw), 4.0rem);
--space-19: clamp(1.808rem, calc(1.008rem + 3.47vw), 6.0rem);
--space-20: clamp(2.40rem, calc(1.328rem + 4.63vw), 8.00rem);
```

## Gap 
```css
--gap-0: 0px; 
--gap-1: 1px; 
--gap-1_25: 0.125rem; 
--gap-2_5: 0.25rem; 
--gap-3_75: 0.375rem; 
--gap-5: 0.5rem; 
--gap-6_25: 0.625rem; 
--gap-7_5: 0.75rem; 
--gap-8_75: 0.875rem; 
--gap-10: 1rem; 
--gap-12_5: 1.25rem; 
--gap-15: 1.5rem; 
--gap-17_5: 1.75rem; 
--gap-20: 2rem; 
--gap-22_5: 2.25rem; 
--gap-27_5: 2.75rem; 
--gap-30: 3rem;
--gap-35: 3.5rem; 
--gap-40: 4rem; 
--gap-50: 5rem; 
--gap-60: 6rem; 
--gap-70: 7rem; 
--gap-80: 8rem; 
--gap-90: 9rem; 
--gap-100: 10rem; 
--gap-110: 11rem; 
--gap-120: 12rem; 
--gap-130: 13rem; 
--gap-140: 14rem; 
--gap-150: 15rem; 
--gap-160: 16rem; 
--gap-180: 18rem; 
--gap-200: 20rem; 
--gap-240: 24rem;
```

## Colors 
```css
--very-dark-desaturated-blue: hsl(238, 29%, 16%); 
--soft-red: hsl(14, 88%, 65%); 
--soft-violet: hsl(273, 75%, 66%); 
--soft-blue: hsl(240, 73%, 65%); 
--light-grayish-blue: hsl(240, 5%, 91%); 
--very-dark-greyish-blue: hsl(237, 12%, 33%); 
--dark-greyish-blue: hsl(240, 6%, 50%)
```

## Display 
```css
--hidden: none; 
--block: block; 
--inline: inline; 
--inline-block: inline-block; 
--flex: flex;
--inline-flex: inline-flex; 
--grid: grid; 
--inline-grid: inline-grid;
```