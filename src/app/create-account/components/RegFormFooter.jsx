const FOOTER_LINKS = [
  { label: "Privacy Agreement", href: "https://www.gtcfx.com/privacy" },
  { label: "Risk disclosure", href: "https://www.gtcfx.com/legal" },
  { label: "Preventing money laundering", href: "https://www.gtcfx.com/legal" },
  { label: "Security instructions", href: "https://www.gtcfx.com/legal" },
  { label: "Legal documents", href: "https://www.gtcfx.com/legal" },
  { label: "Complaints Handling Policy", href: "https://www.gtcfx.com/legal" },
];

export default function RegFormFooter() {
  return (
    <footer className="w-full mt-auto bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-12 grid grid-cols-1">
        <div className="space-y-4 text-[11px] leading-[1.7] text-[#9ca3af]">
          <p>
            This website is operated by the FSP, GTC Global SA (Pty) Ltd (CIPC company number
            2020/810937/07), registered Address: 18 Cavendish Road, Claremont, Cape Town, Western
            Cape, 7708, South Africa. An authorised financial services provider, licensed and
            regulated by the Financial Sector Conduct Authority (FSCA) in the Republic of South
            Africa, with FSP No. 51545. The FSP is not the market maker or product issuer, and acts
            solely as an intermediary in terms of the FAIS Act between the client and GTC Global
            Trade Capital Co. Limited, rendering only an intermediary service in relation to
            derivative products offered by GTC Global Trade Capital Co. Limited. Therefore, GTC
            Global SA (Pty) Ltd does not act as a principal or counterparty in any of your
            transactions. By proceeding with opening an account, this will be registered with GTC
            Global Trade Capital Co. Limited, registered Address: 1/Floor, B&amp;P House, Kumul
            Highway, Port Vila, Vanuatu, licensed by the VFSC as a Financial Dealer and may act as
            the relevant product issuer and/or counterparty under the applicable terms and
            conditions of their Client Agreement.
          </p>
          <p>
            Depending on the client&apos;s jurisdiction, classification and onboarding route, the
            relevant product issuer may be GTC Global Trade Capital Co. Limited, GTC Global Ltd or
            GTC Global Trading Ltd. The applicable contracting entity will be disclosed to the
            client before account opening and will be identified in the relevant Client Agreement.
            GTC Global Ltd, a company incorporated in Mauritius with Company Number C188049, holding
            a Global Business Licence, and authorised and regulated by the Financial Services
            Commission, Mauritius (FSC) as an Investment Dealer (Full Service Dealer, excluding
            Underwriting) / SEC-2.1B, Licence No. GB22200292. Registered Office: Ground Floor, The
            Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius.
          </p>
          <p>
            GTC Global Trading Ltd, a private limited company incorporated under the laws of the
            Autonomous Island of Anjouan, Union of the Comoros, with company number 16283. GTC Global
            Trading Ltd holds an AOFA licence number. L16283/GTC issued by the Anjouan Offshore
            Finance Authority. Registered Address: Boulevard de Coalancanthe, Mutsamudu, Anjouan,
            Union of the Comoros.
          </p>
          <p>
            Each entity within the GTC Financial Group is a separate legal entity and is authorised,
            regulated or licensed only in the jurisdiction stated for that entity. No entity&apos;s
            licence should be understood as extending to any other entity within the group.
          </p>
          <p>
            Investing in derivative products carries significant risks and may not be suitable for
            all investors. The use of leverage in these instruments can increase both the level of
            risk and potential for losses. Before making any decision to engage in foreign exchange
            trading or Contracts for Difference (CFDs), it is essential to carefully consider your
            investment objectives, level of experience, and risk tolerance. You should only invest
            funds that you can afford to lose. We strongly encourage you to educate yourself
            thoroughly on the associated risks and, if you have any questions, seek advice from an
            independent financial or tax advisor.
          </p>
          <p>
            Services are not offered to residents of any jurisdiction where such offer,
            solicitation, distribution or use would be contrary to local laws or regulations,
            including but not limited to the United States, Japan, and any jurisdiction subject to
            applicable sanctions or regulatory restrictions.
          </p>
          <p>
            Each entity within the GTC Financial Group operates independently. The financial
            products and services offered on this website are provided by GTC Global Trade Capital
            Co. Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}
