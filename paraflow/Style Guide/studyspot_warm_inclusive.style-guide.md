# StudySpot Warm Inclusive Style Guide

**Style Overview**:
A soft flat design mobile interface featuring gentle Morandi tones with warm terracotta as the primary color. Creates visual hierarchy through layered background colors with subtle contrast—no shadows, borders, or high-saturation elements. The off-white background with warm tinting provides a cozy atmosphere, complemented by harmonious analogous accent colors (dusty sage, warm sand, soft mauve) for an inclusive, supportive feel.

## Colors
### Primary Colors
  - **primary-base**: `text-[#C17F6E]` or `bg-[#C17F6E]`
  - **primary-lighter**: `bg-[#D4A093]`
  - **primary-darker**: `text-[#A66657]` or `bg-[#A66657]`

### Background Colors
- **bg-page**: `bg-[#FAF8F5]`
- **bg-container-primary**: `bg-[#F5F1ED]` - Main cards, content containers
- **bg-container-secondary**: `bg-[#EFE9E3]`
- **bg-container-inset**: `bg-[#E8DFD7]` - For input fields
- **bg-container-inset-strong**: `bg-[#DFD3C8]` - For checkbox background, slider track
- **bg-bottom-navigation**: `bg-[#F9F6F3]`

### Text Colors
- **color-text-primary**: `text-[#4A4440]`
- **color-text-secondary**: `text-[#726B64]`
- **color-text-tertiary**: `text-[#9B9389]`
- **color-text-quaternary**: `text-[#C4BCAF]`
- **color-text-on-dark-primary**: `text-[#FAF8F5]` - Text on primary-base and primary-darker surfaces
- **color-text-on-dark-secondary**: `text-[#E8DFD7]` - Text on primary-base and primary-darker surfaces
- **color-text-link**: `text-[#C17F6E]` - Links, text-only buttons

### Functional Colors
Use sparingly to maintain the gentle Morandi aesthetic.
  - **color-success-default**: #B8C6B0
  - **color-success-light**: #D9E3D4 - tag/label bg
  - **color-error-default**: #D4A89E - alert banner bg
  - **color-error-light**: #E8D3CC - tag/label bg
  - **color-warning-default**: #E4CDB3 - tag/label bg
  - **color-warning-light**: #F0E3D4 - tag/label bg, alert banner bg
  - **color-function-default**: #8B9DAA
  - **color-function-light**: #C8D5DE - tag/label bg

### Accent Colors
  - A harmonious analogous Morandi palette for categorization and subtle highlights. Use with restraint.
  - **accent-sage**: `text-[#A8B5A5]` or `bg-[#A8B5A5]`
  - **accent-sand**: `text-[#D4C4B0]` or `bg-[#D4C4B0]`
  - **accent-mauve**: `text-[#C9B5BD]` or `bg-[#C9B5BD]`

### Data Visualization Charts
  - Standard data colors: #E8E2DC, #D4C9BF, #BFB0A3, #A89888, #8F7F6F, #756657
  - Important data can use small amounts of: #C17F6E, #A8B5A5, #C9B5BD, #D4C4B0

## Typography
- **Font Stack**:
  - **font-family-base**: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif` — For regular UI copy

- **Font Size & Weight**:
  - **Caption**: `text-xs font-normal` (12px / 400) - only used for text labels in bottom navigation items
  - **Body small**: `text-sm font-normal` (14px / 400)
  - **Body default**: `text-base font-normal` (16px / 400)
  - **Card Title / Emphasized Text**: `text-base font-semibold` (16px / 600)
  - **Page Title**: `text-xl font-semibold` (20px / 600)
  - **Headline**: `text-3xl font-semibold` (30px / 600)
  - **Display**: `text-4xl font-semibold` (36px / 600)

- **Line Height**: 1.5

## Border Radius
  - **Small**: 8px — Elements inside cards
  - **Medium**: 12px - Inputs, small cards
  - **Large**: 16px — Cards, containers
  - **Full**: full — Toggles, avatars, small tags

## Layout & Spacing
  - **Spacing Scale**:
  - **Base Unit**: 4px
  - **Tight**: 8px - For closely-related elements
  - **Compact**: 12px - For list items and small gaps
  - **Standard**: 16px - For general padding, margins and section/module spacing
  - **Comfortable**: 20px - For generous section spacing

## Create Boundaries
Surface color contrast with subtle differentiation to create unified, gentle layers. No borders, dividers, or shadows.

### Borders
  - No borders.

### Dividers
  - No dividers.

### Shadows & Effects
  - No shadows.

## Assets
### Image
- For normal `<img>`: `object-cover`
- For `<img>` with:
  - Slight overlay: `object-cover brightness-90`
  - Heavy overlay: `object-cover brightness-75`

### Icon
- Use Lucide icons from Iconify.
- To ensure an aesthetic layout, each icon should be centered in a square container, typically without a background, matching the icon's size.
- Use Tailwind font size to control icon size
- Example:
  ```html
  <div class="flex items-center justify-center bg-transparent w-4 h-4">
  <iconify-icon icon="lucide:map-pin" class="text-base"></iconify-icon>
  </div>
  ```

### Third-Party Brand Logos:
   - Use Brand Icons from Iconify.
   - Logo Example:
     Monochrome Logo: `<iconify-icon icon="simple-icons:x"></iconify-icon>`
     Colored Logo: `<iconify-icon icon="logos:google-icon"></iconify-icon>`

### User's Own Logo:
- To protect copyright, do **NOT** use real product logos as a logo for a new product, individual user, or other company products.
- **Icon-based**:
  - **Graphic**: Use a simple, relevant icon (e.g., a `map-pin` icon for a location app, a `book-open` icon for a study app).

## Page Layout - Mobile
```html
<!-- Mobile Layout Template: Adjust body width (w-[390px]) based on target device -->
<body class="w-[390px] min-h-[844px] bg-[#FAF8F5] font-['-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto','Helvetica_Neue','Arial',sans-serif] leading-[1.5]">

  <!-- Top Fixed Header: Contains status bar safe area and navigation bar -->
  <div class="z-10 fixed top-0 w-full bg-[#F5F1ED]">
    <!-- Default Top Safe Area -->
    <div class="h-[env(safe-area-inset-top,0px)]"></div>
    <!-- Top Navigation Bar: Standard height of 56px (h-14), remove if not needed -->
    <header class="h-14 flex items-center justify-between px-6">
      <!-- Navigation content goes here -->
    </header>
  </div>

  <!-- Top Spacer: Pushes content down to avoid overlapping with the fixed header. Adjust as needed, for example, set both `h` to 0 if a hero image is to be displayed under the status bar. -->
  <div>
    <!-- `h` should match the the top safe area height -->
    <div class="h-[env(safe-area-inset-top,0px)]"></div>
    <!-- `h` should match the navigation bar height. Adjust as needed. -->
    <div class="h-14"></div>
  </div>

  <!-- Main Scrollable Content Area  -->
  <main class="py-4 space-y-4">
    <!-- Main content goes here, use section with horizontal page padding(px-4) -->
    <section class="px-4 ...">
    </section>
  </main>

  <!-- Bottom Spacer: Avoid overlapping with the fixed bottom bars -->
  <div>
    <!-- `mt` is an additional margin to prevent layout miscalculations. `h` should match the height of the Bottom bar(Navigation, Toolbar, or Input Field). Adjust `h` if these bottom components change. -->
    <div class="mt-[16px] h-[72px]"></div>
    <!-- `h` equals to Bottom Safe Area -->
    <div class="h-[env(safe-area-inset-bottom,0px)]"></div>
    <!-- Space for Floating Action Button, remove entire div if not needed. `h` equals to the height of the Floating Action Button -->
    <div class="h-12"></div>
  </div>

  <!-- Bottom Fixed Area: Contains FAB and/or bottom navigation and/or bottom toolbar and/or bottom input dialog and bottom safe area -->
  <div class="z-10 fixed bottom-0 w-full flex flex-col">

    <!-- Floating Action Button (Optional): Remove entire div if not needed -->
    <div class="flex flex-col gap-4 px-6 pb-6 items-end">
      <button class="w-12 h-12 flex items-center justify-center">
        <!-- FAB content: icon only, no text -->
      </button>
    </div>

    <!-- Bottom bar(container) for Navigation/Toolbar/Input Field (bg and safe area) (Optional): Remove entire div if not needed -->
    <div class="bg-[#F9F6F3]">
      <!-- Bottom Navigation/Toolbar/Input Field(layout) -->
      <nav class="flex justify-around py-4 px-1">
        <!-- Navigation Item: flex-1; text-[#9B9389](Default); text-[#4A4440](Active) -->
        <div class="flex flex-1 flex-col items-center gap-1">
            <div class="w-6 h-6 flex items-center justify-center">
                <iconify-icon icon="lucide:map" class="text-[#9B9389]"></iconify-icon>
            </div>
            <span class="text-xs font-normal text-[#9B9389]">Map</span>
        </div>
        <!-- Center FAB in Navigation (Optional): Remove entire div if not needed -->
        <div class="flex flex-1 flex-col items-center">
            <button class="w-12 h-12 flex items-center justify-center">
                <!-- FAB content: icon only, no text -->
            </button>
        </div>
      </nav>
      <!-- Default Bottom Safe Area -->
      <div class="h-[env(safe-area-inset-bottom,0px)]"></div>
    </div>
    <!-- Alternative Bottom Safe Area: Use ONLY when there's no Bottom bar -->
    <div class="h-[env(safe-area-inset-bottom,0px)]"></div>
  </div>
</body>
```

## Tailwind Component Examples (Key attributes)
**Important Note**: Use utility classes directly. Do NOT create custom CSS classes or add styles in <style> tags for the following components

### Basic

- **Button**:
  - Example 1 (Primary solid button):
    - button: `flex items-center justify-center gap-2 px-6 py-3 bg-[#C17F6E] text-[#FAF8F5] rounded-xl hover:bg-[#A66657] transition`
      - span(button copy): `whitespace-nowrap font-semibold`
  - Example 2 (Secondary button):
    - button: `flex items-center justify-center gap-2 px-6 py-3 bg-[#EFE9E3] text-[#4A4440] rounded-xl hover:bg-[#E8DFD7] transition`
      - span(button copy): `whitespace-nowrap font-semibold`
  - Example 3 (Text button):
    - button: `flex items-center gap-1 text-[#C17F6E] hover:opacity-70 transition`
      - span(button copy): `whitespace-nowrap`
  - Example 4 (Icon button):
    - button: `flex items-center justify-center w-10 h-10 bg-[#EFE9E3] rounded-xl hover:bg-[#E8DFD7] transition`
      - icon

- **Tag Group (Filter Tags)**
  - container(scrollable): `flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden`
    - label (Tag item):
      - input: `type="radio" name="category" class="sr-only peer" checked`
      - div: `px-4 py-2 bg-[#EFE9E3] text-[#726B64] peer-checked:bg-[#C17F6E] peer-checked:text-[#FAF8F5] rounded-full hover:opacity-80 transition whitespace-nowrap cursor-pointer`

### Data Entry
- **Progress bars/Sliders**: `h-1.5 bg-[#DFD3C8] rounded-full`
  - Progress fill: `h-full bg-[#C17F6E] rounded-full`

- **Checkbox**
  - label: `flex items-center gap-3 cursor-pointer`
    - input: `type="checkbox" class="sr-only peer"`
    - div: `w-5 h-5 bg-[#E8DFD7] rounded-md flex items-center justify-center peer-checked:bg-[#C17F6E] text-transparent peer-checked:text-[#FAF8F5]`
      - svg(Checkmark): `w-3 h-3 stroke="currentColor" stroke-width="3" fill="none" viewBox="0 0 24 24"`
        - path: `d="M5 12l5 5L20 7"`
    - span(text): `text-[#4A4440]`

- **Radio button**
  - label: `flex items-center gap-3 cursor-pointer`
    - input: `type="radio" name="option" class="sr-only peer"`
    - div: `w-5 h-5 bg-[#E8DFD7] rounded-full flex items-center justify-center peer-checked:bg-[#C17F6E] text-transparent peer-checked:text-[#FAF8F5]`
      - svg(dot indicator): `w-2 h-2 fill="currentColor" viewBox="0 0 24 24"`
        - circle: `cx="12" cy="12" r="12"`
    - span(text): `text-[#4A4440]`

- **Switch/Toggle**
  - label: `flex items-center gap-3 cursor-pointer`
    - div: `relative`
      - input: `type="checkbox" class="sr-only peer"`
      - div(Toggle track): `w-12 h-7 bg-[#E8DFD7] peer-checked:bg-[#C17F6E] rounded-full transition`
      - div(Toggle thumb): `absolute top-1 left-1 w-5 h-5 bg-[#FAF8F5] rounded-full peer-checked:translate-x-5 transition`
    - span(text): `text-[#4A4440]`

- **Select/Dropdown**
  - Select container: `flex items-center justify-between px-4 py-3 bg-[#E8DFD7] rounded-xl cursor-pointer hover:bg-[#DFD3C8] transition`
    - text: `text-[#4A4440]`
    - Dropdown icon(square container): `flex items-center justify-center bg-transparent w-4 h-4`
      - icon: `text-[#726B64]`

### Container
- **Card**
    - Example 1 (Vertical card with image and text):
        - Card: `bg-[#F5F1ED] rounded-2xl flex flex-col p-3 gap-3`
        - Image: `rounded-lg w-full`
        - Text area: `flex flex-col gap-2`
          - card-title: `text-base font-semibold text-[#4A4440]`
          - card-subtitle: `text-sm font-normal text-[#726B64]`
    - Example 2 (Horizontal card with image and text):
        - Card: `bg-[#F5F1ED] rounded-2xl flex gap-3 p-3`
        - Image: `rounded-lg h-full w-24`
        - Text area: `flex flex-col gap-2 flex-1`
          - card-title: `text-base font-semibold text-[#4A4440]`
          - card-subtitle: `text-sm font-normal text-[#726B64]`
    - Example 3 (Image-focused card):
        - Card: `flex flex-col gap-2`
        - Image: `rounded-2xl w-full`
        - Text area: `flex flex-col gap-1`
          - card-title: `text-base font-semibold text-[#4A4440]`
          - card-subtitle: `text-sm font-normal text-[#726B64]`
    - Example 4 (Simple text-only card):
        - Card: `bg-[#EFE9E3] rounded-2xl p-4 flex flex-col gap-3`

- **List**
  - List container: `space-y-1`
    - list-item: `flex items-center justify-between py-3 hover:bg-[#EFE9E3] rounded-xl px-3 transition cursor-pointer`
      - Left content: `flex items-center gap-3`
        - icon-container (if applicable): `w-5 h-5 flex items-center justify-center`
          - icon: `text-[#726B64]`
        - text: `text-[#4A4440]`
      - Right content: `flex items-center gap-2`
        - value/badge (if applicable): `text-[#726B64] text-sm`
        - chevron-icon (if applicable): `w-4 h-4 text-[#9B9389]`

## Additional Notes
The StudySpot style creates a warm, supportive atmosphere through gentle Morandi tones and soft flat design. The low-saturation color palette with warm terracotta as primary ensures visual comfort during extended use, ideal for students navigating campus spaces. Surface layering through subtle color differentiation (rather than shadows or borders) maintains visual unity while establishing clear information hierarchy. The harmonious analogous accent palette provides flexible categorization without disrupting the cozy, inclusive feel.

<colors_extraction>
#C17F6E
#D4A093
#A66657
#FAF8F5
#F5F1ED
#EFE9E3
#E8DFD7
#DFD3C8
#F9F6F3
#4A4440
#726B64
#9B9389
#C4BCAF
#B8C6B0
#D9E3D4
#D4A89E
#E8D3CC
#E4CDB3
#F0E3D4
#8B9DAA
#C8D5DE
#A8B5A5
#D4C4B0
#C9B5BD
#E8E2DC
#D4C9BF
#BFB0A3
#A89888
#8F7F6F
#756657
</colors_extraction>
