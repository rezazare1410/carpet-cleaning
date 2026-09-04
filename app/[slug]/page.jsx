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

import NarmakPage, {
  metadata as narmakMetadata,
} from "../carpet-cleaning-narmak/page";

import TehranparsPage, {
  metadata as tehranparsMetadata,
} from "../carpet-cleaning-tehranpars/page";

import PasdaranPage, {
  metadata as pasdaranMetadata,
} from "../carpet-cleaning-pasdaran/page";
import HafthozPage, {
  metadata as hafthozMetadata,
} from "../carpet-cleaning-haft-hoz/page";

const NIROO_HAVAYI_SLUG =
  "قالیشویی-در-نیروی-هوایی";

const TEHRAN_NO_SLUG =
  "قالیشویی-در-تهران-نو";

const PIROOZI_SLUG =
  "قالیشویی-در-پیروزی";

const NARMAK_SLUG =
  "قالیشویی-در-نارمک";

const TEHRANPARS_SLUG =
  "قالیشویی-در-تهرانپارس";

const PASDARAN_SLUG =
  "قالیشویی-در-پاسداران";

  const HAFTHOZ_SLUG =
  "قالیشویی-در-هفت-حوض";

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
    {
      slug: NARMAK_SLUG,
    },
    {
      slug: TEHRANPARS_SLUG,
    },
    {
      slug: PASDARAN_SLUG,
    },
    {
  slug: HAFTHOZ_SLUG,
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

  if (normalizedSlug === NARMAK_SLUG) {
    return narmakMetadata;
  }

  if (normalizedSlug === TEHRANPARS_SLUG) {
    return tehranparsMetadata;
  }

  if (normalizedSlug === PASDARAN_SLUG) {
    return pasdaranMetadata;
  }
  if (normalizedSlug === HAFTHOZ_SLUG) {
  return hafthozMetadata;
}

  return {};
}

export default async function PersianLocationPage({
  params,
}) {
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

  if (normalizedSlug === NARMAK_SLUG) {
    return <NarmakPage />;
  }

  if (normalizedSlug === TEHRANPARS_SLUG) {
    return <TehranparsPage />;
  }

  if (normalizedSlug === PASDARAN_SLUG) {
    return <PasdaranPage />;
  }
  if (normalizedSlug === HAFTHOZ_SLUG) {
  return <HafthozPage />;
}

  notFound();
}