# StudySpot Energetic Style Guide

**Style Overview**:
A vibrant flat design style for mobile that uses bold, saturated colors and strong surface contrast to create energetic visual hierarchy, with zero shadows or gradients for maximum clarity and youthful vitality.

## Colors
### Primary Colors
  - **primary-base**: `text-[#FF7A3D]` or `bg-[#FF7A3D]` - Bright tangerine
  - **primary-lighter**: `bg-[#FF9966]`
  - **primary-darker**: `text-[#E6590A]` or `bg-[#E6590A]`

### Background Colors
- **bg-page**: `bg-white`
- **bg-container-primary**: `bg-[#FFF8F5]` - Subtle warm tint for cards
- **bg-container-secondary**: `bg-[#F5F5F5]` - Neutral light gray for secondary containers
- **bg-container-inset**: `bg-[#FFF0E8]` - For input fields
- **bg-container-inset-strong**: `bg-[#FFE5D9]` - For active input states
- **bg-bottom-navigation**: `bg-white`

### Text Colors
- **color-text-primary**: `text-[#1A1A1A]`
- **color-text-secondary**: `text-[#4D4D4D]`
- **color-text-tertiary**: `text-[#808080]`
- **color-text-quaternary**: `text-[#B3B3B3]`
- **color-text-on-dark-primary**: `text-white` - Text on primary-base, primary-darker, accent-coral, and dark backgrounds
- **color-text-on-dark-secondary**: `text-white/80` - Secondary text on dark backgrounds
- **color-text-link**: `text-[#FF7A3D]` - Links, text-only buttons, clickable table text

### Functional Colors
Use **sparingly** to maintain vibrant yet focused aesthetic. Used for status indicators, alerts, and simple informational cards.
  - **color-success-default**: #7ED321
  - **color-success-light**: #E8F7D1 - tag/label bg
  - **color-error-default**: #FF4D4D - alert banner bg
  - **color-error-light**: #FFE0E0 - tag/label bg
  - **color-warning-default**: #FFB800 - tag/label bg
  - **color-warning-light**: #FFF4D6 - tag/label bg, alert banner bg
  - **color-function-default**: #4A90E2
  - **color-function-light**: #D6EBFF - tag/label bg

### Accent Colors
  - A secondary palette for dynamic balance and categorization. Use to complement primary tangerine.
  - **accent-lime**: `text-[#A4D65E]` or `bg-[#A4D65E]` - Fresh lime green for encouraging actions
  - **accent-coral**: `text-[#FF6B6B]` or `bg-[#FF6B6B]` - Soft coral for warm highlights
  - **accent-sky**: `text-[#5BC0EB]` or `bg-[#5BC0EB]` - Bright sky blue for complementary balance

### Data Visualization Charts
  - Standard data colors: #FF7A3D, #A4D65E, #FF6B6B, #5BC0EB, #FFB800, #7ED321
  - Neutral data: #E0E0E0, #B3B3B3, #808080, #4D4D4D

## Typography
- **Font Stack**:
  - **font-family-base**: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif` — For regular UI copy

- **Font Size & Weight**:
  - **Caption**: `text-xs font-medium` (12px / 500) - Navigation labels, timestamps
  - **Body small**: `text-sm font-normal` (14px / 400) - Secondary descriptions
  - **Body default**: `text-base font-normal` (16px / 400) - Primary content
  - **Card Title / Emphasized Text**: `text-base font-bold` (16px / 700) - Strong emphasis
  - **Page Title**: `text-xl font-bold` (20px / 700) - Section headers
  - **Headline**: `text-2xl font-bold` (24px / 700) - Main page titles
  - **Display**: `text-3xl font-bold` (30px / 700) - Hero text

- **Line Height**: 1.5

## Border Radius
  - **Small**: 8px — Tags, badges, small buttons
  - **Medium**: 12px - Input fields, cards
  - **Large**: 16px — Main cards and containers
  - **Full**: full — Toggles, avatars, circular buttons

## Layout & Spacing
  - **Spacing Scale**:
  - **Base Unit**: 4px
  - **Tight**: 8px - For closely-related elements within components
  - **Compact**: 12px - Between list items and small gaps
  - **Standard**: 16px - General padding, margins, and section spacing
  - **Spacious**: 24px - Between major sections for breathing room

## Create Boundaries
Boundaries created through **strong surface color contrast** with no shadows, no gradients, and minimal borders for energetic clarity.

### Borders
  - **Case 1**: No borders for most elements — rely on surface color contrast.
  - **Case 2**: If needed for input fields or focus states
    - **Default**: 2px solid #E0E0E0. `border-2 border-[#E0E0E0]`
    - **Focus/Active**: 2px solid #FF7A3D. `border-2 border-[#FF7A3D]`

### Dividers
  - **Case 1**: No dividers — use spacing and color contrast.
  - **Case 2**: If needed for strong separation, `border-t-2` or `border-b-2` `border-[#F0F0F0]`.

### Shadows & Effects
  - **No shadows** — Pure flat design relies entirely on color contrast for depth and hierarchy.

## Assets
### Image
- For normal `<img>`: object-cover brightness-95 contrast-105
- For `<img>` with:
  - Slight overlay: object-cover brightness-85 contrast-105
  - Heavy overlay: object-cover brightness-70 contrast-105

### Icon
- Use Lucide icons from Iconify.
- To ensure an aesthetic layout, each icon should be centered in a square container, typically without a background, matching the icon's size.
- Use Tailwind font size to control icon size
- Example:
  ```html
  <div class="flex items-center justify-center bg-transparent w-5 h-5">
  <iconify-icon icon="lucide:map-pin" class="text-xl"></iconify-icon>
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
  - **Graphic**: Use a simple, relevant icon (e.g., a `map-pin` icon for a navigation app, a `book-open` icon for a study app).

## Page Layout - Mobile

```html
<!-- Mobile Layout Template: Adjust body width (w-[390px]) based on target device -->
<body class="w-[390px] min-h-[844px] bg-white font-['-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto','Helvetica_Neue','Arial','sans-serif'] leading-[1.5]">

  <!-- Top Fixed Header: Contains status bar safe area and navigation bar -->
  <div class="z-10 fixed top-0 w-full bg-white">
    <!-- Default Top Safe Area -->
    <div class="h-[env(safe-area-inset-top,0px)]"></div>
    <!-- Top Navigation Bar: Standard height of 56px (h-14), remove if not needed -->
    <header class="h-14 flex items-center justify-between px-4">
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
    <div class="mt-[16px] h-[68px]"></div>
    <!-- `h` equals to Bottom Safe Area -->
    <div class="h-[env(safe-area-inset-bottom,0px)]"></div>
    <!-- Space for Floating Action Button, remove entire div if not needed. `h` equals to the height of the Floating Action Button -->
    <div class="h-14"></div>
  </div>

  <!-- Bottom Fixed Area: Contains FAB and/or bottom navigation and/or bottom toolbar and/or bottom input dialog and bottom safe area -->
  <div class="z-10 fixed bottom-0 w-full flex flex-col">

    <!-- Floating Action Button (Optional): Remove entire div if not needed -->
    <div class="flex flex-col gap-4 px-4 pb-4 items-end">
      <button class="w-14 h-14 flex items-center justify-center bg-[#FF7A3D] rounded-full">
        <!-- FAB content: icon only, no text -->
      </button>
    </div>

    <!-- Bottom bar(container) for Navigation/Toolbar/Input Field (bg and safe area) (Optional): Remove entire div if not needed -->
    <div class="bg-white">
      <!-- Bottom Navigation/Toolbar/Input Field(layout) -->
      <nav class="flex justify-around py-3 px-1 border-t-2 border-[#F5F5F5]">
        <!-- Navigation Item: flex-1; text-[#B3B3B3](Default); text-[#FF7A3D](Active) -->
        <div class="flex flex-1 flex-col items-center gap-1">
            <div class="w-6 h-6 flex items-center justify-center">
                <iconify-icon icon="lucide:map" class="text-2xl text-[#B3B3B3]"></iconify-icon>
            </div>
            <span class="text-xs font-medium text-[#B3B3B3]">Explore</span>
        </div>
        <!-- Center FAB in Navigation (Optional): Remove entire div if not needed -->
        <div class="flex flex-1 flex-col items-center">
            <button class="w-14 h-14 flex items-center justify-center bg-[#FF7A3D] rounded-full -mt-7">
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
    - button: flex items-center justify-center gap-2 bg-[#FF7A3D] text-white rounded-xl px-6 py-3 font-bold hover:bg-[#E6590A] transition
      - icon (optional)
      - span: whitespace-nowrap
  - Example 2 (Secondary outline button):
    - button: flex items-center justify-center gap-2 border-2 border-[#FF7A3D] text-[#FF7A3D] bg-white rounded-xl px-6 py-3 font-bold hover:bg-[#FFF8F5] transition
      - icon (optional)
      - span: whitespace-nowrap
  - Example 3 (Text button):
    - button: flex items-center gap-1 text-[#FF7A3D] font-bold hover:text-[#E6590A] transition
      - span: whitespace-nowrap
  - Example 4 (Icon button):
    - button: flex items-center justify-center w-10 h-10 bg-[#FFF8F5] rounded-xl hover:bg-[#FFE5D9] transition
      - icon

- **Tag Group (Filter Tags)**
  - container(scrollable): flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden
    - label (Tag item 1):
      - input: type="radio" name="tag1" class="sr-only peer" checked
      - div: bg-[#F5F5F5] text-[#4D4D4D] peer-checked:bg-[#FF7A3D] peer-checked:text-white hover:bg-[#E0E0E0] peer-checked:hover:bg-[#E6590A] transition whitespace-nowrap px-4 py-2 rounded-xl font-bold

### Data Entry
- **Progress bars/Sliders**: h-2 bg-[#F0F0F0] rounded-full
  - progress-fill: bg-[#FF7A3D] h-2 rounded-full

- **Checkbox**
  - label: flex items-center gap-3
    - input: type="checkbox" class="sr-only peer"
    - div: w-6 h-6 bg-[#FFF0E8] rounded-lg flex items-center justify-center peer-checked:bg-[#FF7A3D] text-transparent peer-checked:text-white transition
      - svg(Checkmark): stroke="currentColor" stroke-width="3"
    - span(text): text-base font-normal text-[#1A1A1A]

- **Radio button**
  - label: flex items-center gap-3
    - input: type="radio" name="option1" class="sr-only peer"
    - div: w-6 h-6 bg-[#FFF0E8] rounded-full flex items-center justify-center peer-checked:bg-[#FF7A3D] text-transparent peer-checked:text-white transition
      - svg(dot indicator): fill="currentColor"
    - span(text): text-base font-normal text-[#1A1A1A]

- **Switch/Toggle**
  - label: flex items-center gap-3
    - div: relative
      - input: type="checkbox" class="sr-only peer"
      - div(Toggle track): w-14 h-8 bg-[#E0E0E0] peer-checked:bg-[#FF7A3D] rounded-full transition
      - div(Toggle thumb): absolute top-1 left-1 w-6 h-6 bg-white rounded-full peer-checked:translate-x-6 transition shadow-sm
    - span(text): text-base font-normal text-[#1A1A1A]

- **Select/Dropdown**
  - Select container: flex items-center justify-between bg-[#FFF0E8] rounded-xl px-4 py-3 hover:bg-[#FFE5D9] transition
    - text: text-base font-normal text-[#1A1A1A]
    - Dropdown icon(square container): flex items-center justify-center bg-transparent w-5 h-5
      - icon: text-xl text-[#FF7A3D]

### Container
- **Card**
    - Example 1 (Vertical card with image and text):
        - Card: bg-[#FFF8F5] rounded-2xl flex flex-col overflow-hidden
        - Image: w-full h-48 object-cover
        - Text area: flex flex-col gap-2 p-4
          - card-title: text-base font-bold text-[#1A1A1A]
          - card-subtitle: text-sm font-normal text-[#4D4D4D]
    - Example 2 (Horizontal card with image and text):
        - Card: bg-[#FFF8F5] rounded-2xl flex gap-3 p-3 overflow-hidden
        - Image: rounded-xl w-24 h-24 object-cover
        - Text area: flex flex-col gap-2 justify-center flex-1
          - card-title: text-base font-bold text-[#1A1A1A]
          - card-subtitle: text-sm font-normal text-[#4D4D4D]
    - Example 3 (Image-focused card: no background or padding):
        - Card: flex flex-col gap-3
        - Image: rounded-2xl w-full h-56 object-cover
        - Text area: flex flex-col gap-1
          - card-title: text-base font-bold text-[#1A1A1A]
          - card-subtitle: text-sm font-normal text-[#4D4D4D]
    - Example 4 (Text-only cards with accent backgrounds):
        - Card: bg-[#FFF8F5] rounded-2xl flex flex-col gap-3 p-5

- **List** (for scrollable lists, settings, etc.)
  - List container: space-y-2
    - list-item: flex items-center justify-between py-4 hover:bg-[#FFF8F5] rounded-xl px-3 transition
      - Left content: flex items-center gap-3
        - icon-container (if applicable): w-10 h-10 bg-[#FFE5D9] rounded-xl flex items-center justify-center
          - icon: text-xl text-[#FF7A3D]
        - text: text-base font-normal text-[#1A1A1A]
      - Right content: flex items-center gap-2
        - value/badge (if applicable): text-sm font-bold text-[#808080]
        - chevron-icon (if applicable): w-5 h-5 text-[#B3B3B3]

## Additional Notes
- **Energy Through Color**: Use vibrant primary and accent colors confidently to create campus vitality
- **Bold Typography**: Font weights of 700 (bold) for headers create strong visual hierarchy
- **Clear Contrast**: High contrast between text and backgrounds ensures readability in outdoor campus environments
- **Touch-Friendly**: Minimum 44px touch targets for mobile usability
- **Positive Momentum**: Design interactions to feel responsive and encouraging through color transitions
