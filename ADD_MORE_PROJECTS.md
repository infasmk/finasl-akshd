# Developer Guide: How to Add More Projects Locally

This guide explains how to add new luxury real estate projects to the Binghatti Portfolio showcase at the source code level (for local development or git-based deployment like GitHub).

---

## Step 1: Upload Your Local Image Asset

To keep everything clean and compiled properly by the **Vite + TS** compiler, you should upload your image assets directly into the localized project assets directory.

1. Locate the assets folder:
   ```bash
   # Add your images (SVG, PNG, JPG, JPEG) to this folder
   /src/assets/projects/
   ```
2. Upload your file, for example, naming it `my_signature_tower.png` or `residence_apex.svg`.

---

## Step 2: Register & Import inside `src/data.ts`

Open `/src/data.ts` in your code editor and perform these simple adjustments:

### 1. Import your brand new image at the top of the file:
```typescript
import signatureTowerImg from "./assets/projects/my_signature_tower.png";
```

### 2. Append a new Project object inside the `PROJECTS` array database:
Navigate downwards to `export const PROJECTS: Project[] = [...]` and add your project:

```typescript
export const PROJECTS: Project[] = [
  // ... existing projects
  {
    id: "signature-tower", // Unique lower-case ID matching no other project
    title: "Binghatti Signature Tower", // Title of the Residence
    subtitle: "By Binghatti Premium Development", // Corporate subtitle or designer collaborator
    location: "Downtown Dubai", // Location of the project
    image: signatureTowerImg, // The variable imported above representing your local file
    category: "Signature Showcase", // Category tag used for filtering
    startingPrice: "AED 8,500,000", // Total starting price
    paymentPlan: "70/30", // Payment structure (e.g., 73/30, 60/40, or 50/50)
  },
];
```

---

## Features Supported Automatically:
- **Dynamic Category Filtering**: The system will automatically detect the new category `"Signature Showcase"` and create a filter selector at the top of the gallery page.
- **Dynamic Location Filtering**: The systems parses details in `location` to construct responsive filters on-the-fly.
- **High-Performance Image Compilation**: Vite bundles and compresses this asset during production compiling, preventing runtime load latency and layout shifts (CLS).
