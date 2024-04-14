import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

// https://github.com/overextended/overextended.github.io/blob/main/theme.config.tsx#L6-L37
function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.kickenit-rp.com${asPath}`;
  const description = frontMatter.description || "KickenIT Roleplay";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/krp-square.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, " ").split("/");
  const category = (arr[1][0] !== "#" && arr[1]) || "KRP";
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? "City Information" : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: "50px",
        lineHeight: "38px",
        background: "url(/krp-square.png) no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      KickenIT Roleplay
    </div>
  ),
  chat: {
    link: "https://discord.gg/kickenitrp",
  },
  docsRepositoryBase: "https://github.com/KickenIT-RP/docs.kickenit-rp.com",
  footer: {
    text: "KickenIT Roleplay",
  },
  primaryHue: { dark: 200, light: 200 },
  head: useHead,
  useNextSeoProps: useNextSeoProps,
};

export default config;
