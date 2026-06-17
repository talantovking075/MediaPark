"use client";

import Link from "next/link";
import "./Brend.css";

const brandsData = [
  { id: 1, name: "LG", logo: "https://cdn.mediapark.uz/imgs/ca7969d3-f4f7-4499-a4e9-43b0c62f4b9c_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(2)-(2).webp", href: "/brand/lg" },
  { id: 2, name: "Artel", logo: "https://cdn.mediapark.uz/images/39cf5026-f1e8-4f56-8f3e-91e245a07b99_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-21.png", href: "/brand/artel" },
  { id: 3, name: "Apple", logo: "https://cdn.mediapark.uz/imgs/153c5cf4-aac4-438b-9efb-0b5d637de337.webp", href: "/brand/apple" },
  { id: 4, name: "DeLonghi", logo: "https://cdn.mediapark.uz/imgs/60bb275a-e3ef-48c2-b94a-287a50a500dc_460e5e87-a5d9-47ae-a475-47c2b53e7a82_test_prev_ui-1.webp", href: "/brand/delonghi" },
  { id: 5, name: "Tefal", logo: "https://cdn.mediapark.uz/images/24a552ae-670f-4c05-8b54-08d0a8926fd0_Tefal.png", href: "/brand/tefal" },
  { id: 6, name: "Dyson", logo: "https://cdn.mediapark.uz/images/7aa95493-0601-401f-811c-2f951d678d05_Dyson.png", href: "/brand/dyson" },
  { id: 7, name: "Karcher", logo: "https://cdn.mediapark.uz/imgs/3d712bb4-e27e-437d-b9c4-96ab5cedc8b5_%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-(4)-(2).webp", href: "/brand/karcher" },
  { id: 8, name: "Vivo", logo: "https://cdn.mediapark.uz/images/468140cd-fb05-4bc0-8e38-f25142ad6fab_VIvo.png", href: "/brand/vivo" },
  { id: 9, name: "Smeg", logo: "https://cdn.mediapark.uz/imgs/8236b195-cf54-471e-9ced-50de5caae9d6_smeg-1.webp", href: "/brand/smeg" },
  { id: 10, name: "Rowenta", logo: "https://cdn.mediapark.uz/imgs/db58baab-228a-4129-89d4-f54d5d8658a5_%D0%A2%D0%BE%D0%B2%D0%B0%D1%80-(1).webp", href: "/brand/rowenta" },
  { id: 11, name: "Bork", logo: "https://cdn.mediapark.uz/imgs/3dd26f11-0682-4261-a7bc-0e81ff1beacb_BORQ.webp", href: "/brand/bork" },
  { id: 12, name: "Samsung", logo: "https://cdn.mediapark.uz/images/ba42f40b-cf72-4c11-9974-285be1ae3d95_samsungpng.png", href: "/brand/samsung" }
];

export default function Brands() {
  return (
    <div className="mp-brands-wrapper">
      
      {/* Sarlavha qismi (Ommabop brendlar) */}
      <div className="mp-brands-header">
        <h2 className="mp-brands-title">Ommabop brendlar</h2>
        <Link href="/brands" className="mp-brands-see-all">
          Barchasi <span className="arrow">&rsaquo;</span>
        </Link>
      </div>

      {/* 6 talik ustunli Brendlar Gridi */}
      <div className="mp-brands-grid">
        {brandsData.map((brand) => (
          <Link key={brand.id} href={brand.href} className="mp-brands-card">
            <img src={brand.logo} alt={brand.name} className="mp-brands-logo" />
          </Link>
        ))}
      </div>

    </div>
  );
}