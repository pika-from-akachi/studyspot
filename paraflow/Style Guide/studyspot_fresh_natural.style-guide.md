# StudySpot Fresh Natural Style Guide

**Style Overview**:
A modern flat design for campus navigation emphasizing clarity and approachability, centered on calm teal with fresh accent colors, using surface color contrast to define boundaries without shadows or borders, creating a reliable yet energetic interface that feels like fresh campus air.

## Colors
### Primary Colors
  - **primary-base**: `text-[#2D9B9B]` or `bg-[#2D9B9B]`
  - **primary-lighter**: `bg-[#4DB5B5]`
  - **primary-darker**: `text-[#247D7D]` or `bg-[#247D7D]`

### Background Colors
- **bg-page**: `bg-[hsla(200, 15%, 98%, 1)]`
- **bg-container-primary**: `bg-white` - Main cards, content containers
- **bg-container-secondary**: `bg-[#F8FAFB]`
- **bg-container-inset**: `bg-[#E8F4F4]` - For input fields
- **bg-container-inset-strong**: `bg-[#D6EDED]` - For checkbox background, slider track
- **bg-bottom-navigation**: `bg-white`

### Text Colors
- **color-text-primary**: `text-black/90`
- **color-text-secondary**: `text-black/65`
- **color-text-tertiary**: `text-black/45`
- **color-text-quaternary**: `text-black/25`
- **color-text-on-dark-primary**: `text-white/95` - Text on dark backgrounds and primary-base, accent-dark color surfaces
- **color-text-on-dark-secondary**: `text-white/70` - Text on dark backgrounds and primary-base, accent-dark color surfaces
- **color-text-link**: `text-[#2D9B9B]` - Links, text-only buttons without backgrounds, and clickable text in tables

### Functional Colors
Use **sparingly** to maintain a clean and focused overall style. Used for the surfaces of text-only cards, simple cards, buttons, and tags.
  - **color-success-default**: #B8E6D5
  - **color-success-light**: #E5F7F0 - tag/label bg
  - **color-error-default**: #F5B5A8 - alert banner bg
  - **color-error-light**: #FFE5E0 - tag/label bg
  - **color-warning-default**: #FFE099 - tag/label bg
  - **color-warning-light**: #FFF4D1 - tag/label bg, alert banner bg
  - **color-function-default**: #5B7C99
  - **color-function-light**: #B8D4E8 - tag/label bg

### Accent Colors
  - A secondary palette for occasional highlights and categorization. Avoid overuse to protect brand identity. Use sparingly.
  - **accent-seafoam**: `text-[#82C3BA]` or `bg-[#82C3BA]`
  - **accent-sky**: `text-[#8DAEC7]` or `bg-[#8DAEC7]`

### Data Visualization Charts
  - Standard data colors: #F0F0F0, #C8C8C8, #9B9B9B, #6E6E6E, #474747, #262626
  - Important data can use small amounts of: #2D9B9B, #82C3BA, #8DAEC7, #5B7C99

## Typography
- **Font Stack**:
  - **font-family-base**: `-apple-system, BlinkMacSystemFont, "Segoe UI"` — For regular UI copy

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
  - **Small**: 8px — Elements inside cards (e.g., photos, icons)
  - **Medium**: 12px - Inputs, tags
  - **Large**: 16px — Cards
  - **Full**: full — Toggles, avatars, small badges, etc.

## Layout & Spacing
  - **Spacing Scale**:
  - **Base Unit**: 4px
  - **Tight**: 8px - For closely-related elements
  - **Compact**: 12px - For list items and small gaps
  - **Standard**: 16px - For general padding, margins and section/module spacing

## Create Boundaries
No borders or shadows, primarily relying on surface color contrast to create clear visual hierarchy
### Borders
  - No Borders.

### Dividers
  - No dividers.

### Shadows & Effects
  - No shadow.

## Assets
### Image

- For normal `<img>`: object-cover
- For `<img>` with:
  - Slight overlay: object-cover brightness-85
  - Heavy overlay: object-cover brightness-50

### Icon

- Use Lucide icons from Iconify.
- To ensure an aesthetic layout, each icon should be centered in a square container, typically without a background, matching the icon's size.
- Use Tailwind font size to control icon size
- Example:
  ```html
  <div class="flex items-center justify-center bg-transparent w-4 h-4">
  <iconify-icon icon="lucide:flag" class="text-base"></iconify-icon>
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
  - **Graphic**: Use a simple, relevant icon (e.g., a `calendar` icon for a scheduling app, a `heart` icon for a dating app).

## Page Layout - Mobile
```html
<!-- Mobile Layout Template: Adjust body width (w-[390px]) based on target device -->
<body class="w-[390px] min-h-[844px] bg-[hsla(200, 15%, 98%, 1)] font-['-apple-system','BlinkMacSystemFont','Segoe_UI',sans-serif] leading-[1.5]">

  <!-- Top Fixed Header: Contains status bar safe area and navigation bar -->
  <div class="z-10 fixed top-0 w-full bg-white">
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
    <div class="bg-white">
      <!-- Bottom Navigation/Toolbar/Input Field(layout) -->
      <nav class="flex justify-around py-4 px-1">
        <!-- Navigation Item: flex-1; text-black/45(Default); text-black/90(Active) -->
        <div class="flex flex-1 flex-col items-center gap-1">
            <div class="w-6 h-6 flex items-center justify-center">
                <iconify-icon icon="lucide:house" class="text-black/45"></iconify-icon>
            </div>
            <span class="text-xs font-normal text-black/45">Home</span>
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
  - Example 1 (text button):
    - button: flex items-center
      - span(button copy): whitespace-nowrap
  - Example 2 (icon button):
    - button: flex items-center
      - icon

- **Tag Group (Filter Tags)**
  - container(scrollable): flex overflow-x-auto [&::-webkit-scrollbar]:hidden
    - label (Tag item 1):
      - input: type="radio" name="tag1" class="sr-only peer" checked
      - div: bg-[#E8F4F4] text-black/65 peer-checked:bg-[#2D9B9B] peer-checked:text-white/95 hover:opacity-70 transition whitespace-nowrap


### Data Entry
- **Progress bars/Sliders**: h-1.5
- **Checkbox**
  - label:
    - input: type="checkbox" class="sr-only peer"
    - div: bg-[#E8F4F4] rounded-md flex items-center justify-center peer-checked:bg-[#2D9B9B] text-transparent peer-checked:text-white/95
      - svg(Checkmark): stroke="currentColor" stroke-width="3"
    - span(text)
- **Radio button**
  - label:
    - input: type="radio" name="option1" class="sr-only peer"
    - div: bg-[#E8F4F4] rounded-full flex items-center justify-center peer-checked:bg-[#2D9B9B] text-transparent peer-checked:text-white/95
      - svg(dot indicator): fill="currentColor"
    - span(text)
- **Switch/Toggle**
  - label:
    - div: relative
      - input: type="checkbox" class="sr-only peer"
      - div(Toggle track): w-12 h-7 bg-[#D6EDED] peer-checked:bg-[#2D9B9B] transition
      - div(Toggle thumb): absolute top-1 left-1 w-5 h-5 bg-white rounded-full peer-checked:translate-x-5 transition
    - span(text)

- **Select/Dropdown**
  - Select container: flex items-center
    - text
    - Dropdown icon(square container): flex items-center justify-center bg-transparent
      - icon

### Container
- **Card**
    - Example 1 (Vertical card with image and text):
        - Card: bg-white rounded-2xl flex flex-col p-3 gap-3
        - Image: rounded-lg w-full
        - Text area: flex flex-col gap-2
          - card-title: text-base font-semibold
          - card-subtitle: text-sm font-normal
    - Example 2 (Horizontal card with image and text):
        - Card: bg-white rounded-2xl flex gap-3 p-3
        - Image: rounded-lg h-full
        - Text area: flex flex-col gap-2
          - card-title: text-base font-semibold
          - card-subtitle: text-sm font-normal
    - Example 3 (Image-focused card: no background or padding. Avoid rounded corners on container as they cause only top corners of image to be rounded):
        - Card: flex flex-col gap-2
        - Image: rounded-2xl w-full
        - Text area: flex flex-col gap-2
          - card-title: text-base font-semibold
          - card-subtitle: text-sm font-normal
    - Example 4 (text-only cards, simple cards, such as Upgrade Card, Activity Summary Cards):
        - Card: bg-white rounded-2xl flex

- **List**
  - List container: space-y-1
    - list-item: flex items-center justify-between py-3 hover:bg-[#F8FAFB]
      - Left content: flex items-center gap-3
        - icon-container (if applicable): w-5 h-5 flex items-center justify-center
          - icon
        - text
      - Right content: flex items-center gap-2
        - value/badge (if applicable)
        - chevron-icon (if applicable): w-4 h-4

## Additional Notes
- Maintain generous whitespace to preserve the "fresh campus air" feeling
- Use color intentionally - teal for primary actions and navigation, seafoam and sky blue for subtle categorization
- Prioritize readability with strong text contrast on clean backgrounds
- Keep interactions straightforward with clear touch targets for mobile use
- Ensure accessibility with sufficient color contrast ratios for all text
