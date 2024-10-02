import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Footer")),
  {
    name: "Footer",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SEOHead")),
  {
    name: "SEOHead",
  }
);

Builder.registerComponent(
  dynamic(() => import("./pages/about")),
  {
    name: "About",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Contact")),
  {
    name: "Contact",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Hero")),
  {
    name: "Hero",
  }
);

Builder.registerComponent(
  dynamic(() => import("./pages")),
  {
    name: "Home",
  }
);

Builder.registerComponent(
  dynamic(() => import("./pages/_app")),
  {
    name: "MyApp",
  }
);


Builder.registerComponent(
  dynamic(() => import("./pages/[...page]")),
  {
    name: "Page",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/AboutUs")),
  {
    name: "AboutUs",
  }
);

Builder.registerComponent(
  dynamic(() => import("./pages/_document")),
  {
    name: "Document",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Navbar")),
  {
    name: "Navbar",
  }
);
