import { notFound } from "next/navigation";

import NirooHavayiPage, {
  metadata as nirooHavayiMetadata,
} from "../carpet-cleaning-niroo-havayi/page";

const NIROO_HAVAYI_SLUG =
  "قالیشویی-در-نیروی-هوایی";

function normalizeSlug(value = "") {
  try {
    return decodeURIComponent(value).normalize("NFC");
  } catch {
    return value.normalize("NFC");
  }
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    {
      slug: NIROO_HAVAYI_SLUG,
    },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  if (normalizedSlug !== NIROO_HAVAYI_SLUG) {
    return {};
  }

  return nirooHavayiMetadata;
}

export default async function PersianLocationPage({ params }) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  if (normalizedSlug !== NIROO_HAVAYI_SLUG) {
    notFound();
  }

  return <NirooHavayiPage />;
}