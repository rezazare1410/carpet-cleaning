import { notFound } from "next/navigation";

import NirooHavayiPage, {
  metadata as nirooHavayiMetadata,
} from "../carpet-cleaning-niroo-havayi/page";

import TehranNoPage, {
  metadata as tehranNoMetadata,
} from "../carpet-cleaning-tehran-no/page";

import PirooziPage, {
  metadata as pirooziMetadata,
} from "../carpet-cleaning-piroozi/page";

const NIROO_HAVAYI_SLUG = "قالیشویی-در-نیروی-هوایی";
const TEHRAN_NO_SLUG = "قالیشویی-در-تهران-نو";
const PIROOZI_SLUG = "قالیشویی-در-پیروزی";

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
    {
      slug: TEHRAN_NO_SLUG,
    },
    {
      slug: PIROOZI_SLUG,
    },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  if (normalizedSlug === NIROO_HAVAYI_SLUG) {
    return nirooHavayiMetadata;
  }

  if (normalizedSlug === TEHRAN_NO_SLUG) {
    return tehranNoMetadata;
  }

  if (normalizedSlug === PIROOZI_SLUG) {
    return pirooziMetadata;
  }

  return {};
}

export default async function PersianLocationPage({ params }) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  if (normalizedSlug === NIROO_HAVAYI_SLUG) {
    return <NirooHavayiPage />;
  }

  if (normalizedSlug === TEHRAN_NO_SLUG) {
    return <TehranNoPage />;
  }

  if (normalizedSlug === PIROOZI_SLUG) {
    return <PirooziPage />;
  }

  notFound();
}