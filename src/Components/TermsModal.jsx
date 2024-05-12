import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const TermsModal = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="bg-slate-800 h-screen darker-grotesque">
      <nav className="flex items-center justify-between md:px-32 px-8 py-5 bg-slate-900">
        <Link to="/">
          <img src={Logo} alt="" width={60} className="cursor-pointer" />
        </Link>
        <div className="md:flex  text-white space-x-8 font-semibold hidden">
          <h1 className="cursor-pointer hover:underline">Home</h1>
          <h1 className="cursor-pointer hover:underline">About</h1>
          <h1 className="cursor-pointer hover:underline">How it Works</h1>
        </div>
        <div className="flex items-center space-x-6">
          <button
            className=" bg-orange-500 font-bold text-white py-2 px-8 rounded-2xl text-lg cursor-pointer"
          >
            Connect Wallet
          </button>
        </div>
      </nav>

      <div className="fixed inset-0 bg-slate-800 px-6 bg-opacity-50 flex justify-center items-center z-50">
        <div
          className="bg-orange-400 p-4 rounded-lg max-w-md w-full"
          style={{ maxHeight: "80vh", overflow: "auto" }}>
          <h2 className="text-lg font-bold">Terms and Conditions</h2>
          <div
            className="text-sm mt-2 overflow-y-auto"
            style={{ maxHeight: "50vh" }}>
            <p className="font-bold mb-2">
              Please read and accept our terms and conditions to continue.
            </p>
            <p className="text-black text-justify">
              THE UTILITY TOKENS BEING OFFERED OR SOLD BY GEMS HEREUNDER (THE
              “TOKENS”) HAVE NOT BEEN REGISTERED UNDER THE SECURITIES LAWS OF
              ANY JURISDICTION. THE RIGHTS AND OBLIGATIONS CONTEMPLATED UNDER
              THESE TERMS, MAY NOT BE OFFERED, SOLD OR OTHERWISE TRANSFERRED
              WITHOUT THE WRITTEN CONSENT OF GEMS. THIS DOCUMENT IS NOT A
              PROSPECTUS OR ANY FORM OF OFFERING MEMORANDUM. THESE TERMS, THE
              TOKEN WHITEPAPER OR ANY OTHER DOCUMENT RELATING TO THE TOKENS OR
              THEIR SALE WERE NOT APPROVED, REVIEWED OR ENDORSED BY ANY
              REGULATOR IN ANY JURISDICTION, NOR SUBMITTED FOR SUCH A REVIEW.
              ANY TRANSACTION ENTERED HEREUNDER IS A PRE-ORDER PURCHASE OF A
              VOUCHER TO USE SERVICES OR PRODUCTS TO BE MADE AVAILABLE BY GEMS
              AND/OR ITS AFFILIATES. THE TOKENS SHOULD NOT BE PURCHASED AS ANY
              FORM OF INVESTMENT OR FOR ANY SPECULATIVE PURPOSES. ANY USE OF THE
              TOKENS FOR ANY PURPOSE OTHER THAN THE INTENDED UTILIZATION OF
              GEMS’ SERVICES AND PRODUCTS SHALL BE AT THE PURCHASER’S SOLE RISK
              AND RESPONSIBILITY, AND IS NOT ENCOURAGED OR APPROVED BY GEMS. THE
              TOKENS ARE NOT BEING OFFERED OR SOLD AND MAY NOT BE OFFERED, SOLD
              OR RESOLD, DIRECTLY OR INDIRECTLY, WITHIN THE UNITED STATES OR TO
              ANY U.S. PERSON, AS DEFINED UNDER APPLICABLE LAWS. THE TOKENS MAY
              NOT BE OFFERED, SOLD OR RESOLD IN HONG KONG BY MEANS OF ANY
              DOCUMENT OTHER THAN (I) IN CIRCUMSTANCES WHICH DO NOT CONSTITUTE
              ANY OFFER TO THE PUBLIC WITHIN THE MEANING OF THE COMPANIES
              (WINDING UP AND MISCELLANEOUS PROVISIONS) ORDINANCE (CAP. 32 OF
              THE LAWS OF HONG KONG) (“CWUMPO”) OR WHICH DO NOT CONSTITUTE AN
              INVITATION TO THE PUBLIC WITHIN THE MEANING OF THE SECURITIES AND
              FUTURES ORDINANCE (CAP. 571 OF THE LAWS OF HONG KONG) (“SFO”), OR
              (II) TO “PROFESSIONAL INVESTORS” AS DEFINED IN THE SFO AND ANY
              RULES MADE UNDER THE SFO, OR (III) IN OTHER CIRCUMSTANCES WHICH DO
              NOT RESULT IN THIS MEMORANDUM BEING A “PROSPECTUS” AS DEFINED IN
              THE CWUMPO, AND NO ADVERTISEMENT, INVITATION OR DOCUMENT RELATING
              TO THE TOKENS MAY BE ISSUED OR MAY BE IN THE POSSESSION OF ANY
              PERSON FOR THE PURPOSE OF ISSUE (IN EACH CASE WHETHER IN HONG KONG
              OR ELSEWHERE), WHICH IS DIRECTED AT, OR THE CONTENTS OF WHICH ARE
              LIKELY TO BE ACCESSED OR READ BY, THE PUBLIC IN HONG KONG (EXCEPT
              IF PERMITTED TO DO SO UNDER THE SECURITIES LAWS OF HONG KONG)
              OTHER THAN WITH RESPECT TO INSTRUMENTS WHICH ARE OR ARE INTENDED
              TO BE DISPOSED OF ONLY TO PERSONS OUTSIDE OF HONG KONG OR ONLY TO
              “PROFESSIONAL INVESTORS” IN HONG KONG AS DEFINED IN THE SFO AND
              ANY RULES MADE UNDER THE SFO. TERMS OF SALE Last Updated: [______]
              These Terms of Sale (these “Terms”) govern the Future Token Sale
              by and between GEMS (a company in formation) (the “GEMS”) and you
              (“you”, the “Contributor”). GEMS is developing a community-driven
              funding platform for blockchain projects (the “Platform”) and
              intends to develop and distribute a token implemented on the
              Ethereum (ERC-20) Blockchain, referred to as the “$GEMS Token” or
              such other name as may be determined (the “Token”), that shall
              have certain utility with respect to the Platform. GEMS has set up
              a dedicated website (the “Site”) to allow Contributors to make
              certain contributions to support the Platform, in exchange for
              Tokens which will be issued to Contributor's wallet address, at a
              later date. These Terms constitute a binding and enforceable legal
              contract between GEMS and You. These Terms memorialize and set
              forth the terms and conditions under which GEMS will issue, and
              the Contributor will be entitled to receive, such Tokens. By
              making a contribution on the Site, you agree to these Terms. If
              you are entering into these Terms on behalf of a company or
              another legal entity, you represent that you have the authority to
              bind such entity and its affiliates to these Terms, in which case
              the term "You" will refer to such entity and its affiliates. If
              the legal entity that you represent does not agree and/or comply
              with these Terms, do not make a contribution. 1.Definitions. 1.1.
              “Blockchain” means a blockchain or distributed ledger technology
              or other similar technology. 1.2. “Blockchain Tokens” means
              digital cryptographic tokens, typically virtual currency (also
              known as “cryptocurrency” or “digital currency”), that are
              implemented on a Blockchain. 1.3. “Token Distribution Event” means
              the initial transfer by GEMS or the Token Entity of Tokens,
              following the date hereof, to purchasers of Tokens who have paid
              contribution amounts for such Tokens. 1.4. “Wallet Address” means
              a cryptographic public private key pair, typically used in the
              context of virtual currency for the purpose of holding funds
              denominated in that virtual currency. 2.Distribution of Tokens
              2.1. The Contributor shall provide the contribution amount
              determined by the Contributor on the Site (the “Contribution
              Amount”) to GEMS's Wallet Address set forth on the Site,
              concurrently with the execution of these Terms, by delivery of
              such number of USDC or USDT stablecoins equivalent to the
              Contribution Amount, on ERC-20. Between the date of transfer of
              the Contribution Amount and the distribution of the Tokens, the
              Contribution Amount will not bear interest for the benefit of the
              Contributor. 2.2. Subject to receipt by GEMS of the Contribution
              Amount in full, the Contributor shall have the right to receive,
              upon the Token Distribution Event, such number of Tokens as set
              forth on the Site at the time of the contribution. 2.3. To the
              extent GEMS shall form a separate entity for the purpose of
              consummating the Token Distribution Event (the “Token Entity”),
              then, in lieu of the distribution of Tokens by GEMS, as set forth
              above, the Contributor shall be distributed the same number of
              Tokens by the Token Entity and all related obligations hereunder
              shall be deemed to refer to the Token Entity, where applicable.
              3.Risk Factors; Disclaimers 3.1. The Contributor agrees and
              acknowledges that Blockchain and Blockchain Tokens projects are
              inherently unpredictable and therefore there is a possibility that
              the Tokens may never be issued, or may ultimately be significantly
              different than currently contemplated. The Contributor will have
              no claims against GEMS nor any of GEMS multi-sig holders,
              contributors, initiators, developers or other associated persons
              (collectively, the “GEMS Associated Persons”) or any directors,
              officers, employees, service providers, agents or representatives
              (collectively, “Representatives”) of GEMS or any GEMS Associated
              Persons, nor any of GEMS's Representatives will have any liability
              of any nature in the event that the Tokens are never issued, or
              issued with different characteristics than originally anticipated.
              GEMS Associated Persons and GEMS Representatives are third party
              beneficiaries of all provisions of these Terms that reference GEMS
              Associated Persons and the GEMS Representatives, respectively.
              3.2. The Contributor acknowledges and agrees that certain GEMS
              Associated Persons may have indemnification rights from GEMS with
              respect to actions taken by them in good faith in respect of GEMS
              and/or based on decisions of the utility mechanism of the Tokens,
              and that a portion of the Contribution Amount may be set aside for
              such purposes. 3.3. In addition, the Contributor agrees to the
              risk factors attached hereto as Exhibit A. 3.4. THE CONTRIBUTOR
              UNDERSTANDS THAT TO THE MAXIMUM EXTENT PERMITTED BY LAW, EXCEPT IN
              THE EVENT OF WILFUL MISCONDUCT, THE CONTRIBUTOR HAS NO RIGHT
              AGAINST GEMS, ANY GEMS ASSOCIATED PERSON OR ANY GEMS
              REPRESENTATIVE. THE CONTRIBUTOR’S AGREEMENT TO THIS SECTION 3.4 IS
              A FUNDAMENTAL PROVISION OF THESE TERMS AND FORMS THE BASIS FOR
              GEMS’S WILLINGNESS TO ENTER INTO THESE TERMS AND TO DELIVER THE
              TOKENS TO THE CONTRIBUTOR. GEMS WOULD NOT HAVE ENTERED INTO THESE
              TERMS AND WOULD NOT DELIVER TOKENS TO THE CONTRIBUTOR, WERE IT NOT
              FOR CONTRIBUTOR’S FULL, COMPLETE AND WILLING AGREEMENT TO THIS
              SECTION 3.4. 3.5. GEMS MAKES NO WARRANTY WHATSOEVER WITH RESPECT
              TO THE TOKENS OR THE PLATFORM, INCLUDING ANY (I) WARRANTY OF
              MERCHANTABILITY; (II) WARRANTY OF FITNESS FOR A PARTICULAR
              PURPOSE; (III) WARRANTY OF TITLE; OR (IV) WARRANTY AGAINST
              INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS OF A THIRD PARTY;
              WHETHER ARISING BY LAW, COURSE OF DEALING, COURSE OF PERFORMANCE,
              USAGE OF TRADE, OR OTHERWISE. EXCEPT AS EXPRESSLY SET FORTH
              HEREIN, THE CONTRIBUTOR ACKNOWLEDGES THAT IT HAS NOT RELIED UPON
              ANY REPRESENTATION OR WARRANTY MADE BY GEMS, ANY GEMS ASSOCIATED
              PERSON OR ANY GEMS REPRESENTATIVE. 3.6. IN ANY EVENT, DISTRIBUTION
              TO THE CONTRIBUTOR OF THE TOKENS AS DESCRIBED HEREIN SHALL BE THE
              FULL AND FINAL SETTLEMENT OF ALL OBLIGATIONS AND LIABILITIES OF
              GEMS, GEMS ASSOCIATED PERSONS AND THE GEMS REPRESENTATIVES, AND
              THE CONTRIBUTOR SHALL HAVE NO CLAIMS OR DEMANDS IN SUCH REGARD.
              4.Representations, Warranties and Undertakings of the Contributor
              4.1. The Contributor hereby represents and warrants to GEMS that:
              (a) the Contributor is an individual or a legal entity duly
              organized and validly existing under the laws of the jurisdiction
              of its incorporation; (b) the Contributor has full power and
              authority to consummate the transactions contemplated hereunder;
              (c) the execution and performance of these Terms by the
              Contributor have been duly authorized by all necessary actions of
              the Contributor, and these Terms has been duly executed and
              delivered by the Contributor; (d) these Terms are valid and
              binding upon the Contributor and enforceable in accordance with
              its terms; (e) the Contribution Amount is provided on
              Contributor’s own account, not as a nominee or agent, and not with
              a view to assign any part thereof, and Contributor has no present
              intention of selling, granting any participation in, or otherwise
              distributing any interest the Contributor has under or with
              respect to the Contribution Amount, the Contributor’s Tokens, or
              otherwise in connection with these Terms; (f) Contributor was not
              formed for the purpose of purchasing the Tokens; (g) Contributor
              does not have any contract, undertaking, agreement or arrangement
              with any person to sell, transfers or grant participations to such
              person or to any third person, with respect to these Terms, the
              Contribution Amount and/or the Contributor’s Tokens; (h)
              Contributor is a regular purchaser of Blockchain Tokens issued by
              projects in the development stage and acknowledges that it is able
              to bear the economic risk of its purchase of Tokens, and has such
              knowledge and experience in financial, business, and software
              technology matters that it is capable of evaluating the merits and
              risks of these Terms, the Tokens, and the Platform, and of making
              an informed decision in respect thereto; (i) Contributor has
              obtained all required independent professional advice (including
              legal, accounting, tax, regulatory and investment advice) with
              respect to its entering into these Terms and purchasing Tokens and
              the regulatory and legal status of the Tokens in the Contributor’s
              jurisdiction of residence and/or incorporation. Contributor is not
              a national, citizen or resident of any jurisdiction which
              prohibits the entry into these Terms and the performance of any
              term of these Terms (including without limitation the issuance of
              the Tokens to the Contributor) and Contributor’s obligations
              hereunder; and (A) Contributor is an “Accredited Investor” within
              the meaning of Rule 501 of Regulation D, as presently in effect,
              as promulgated by the Securities and Exchange Commission under the
              US Securities Act of 1933, as amended (the “Act”), or is not a “US
              Person” for purpose of registration requirements of the Act; or
              (B) to the extent that the Contributor is residing in or is a
              citizen of Hong Kong, the Contributor is a professional investor
              as such term is defined in the Securities and Futures Ordinance
              and the rules enacted under such Ordinance. 4.2. Contributor
              hereby represents and warrants to GEMS that it has carefully
              reviewed and understands and accepts the various risks of entering
              into these Terms, as further detailed in Exhibit A, including the
              Contributor’s possible participation in the Token Distribution
              Event and the risks associated with holding Tokens. The
              Contributor hereby consents and agrees to bear such risks. 4.3.
              The Contributor represents and warrants that he, she or it will
              comply with all Know Your Client and Anti Money Laundering
              Requirements that will be required by GEMS or any third party
              service provider engaged by GEMS for such purposes, that all
              information and documents provided by Contributor will be true,
              complete and accurate in all respects. The Contributor undertakes
              to provide GEMS with such other information and/or documents GEMS
              may request from time to time in connection with GEMS’s Know Your
              Client and Anti Money Laundering compliance, and understands that
              GEMS may, in any event of failure by the Contributor to provide
              such information in full to GEMS’s satisfaction, in its sole and
              absolute discretion, terminate any transaction entered into
              hereunder or withhold any Tokens otherwise due to Contributor.
              4.4. Contributor acknowledges and accepts that Contributor will be
              wholly responsible if Contributor provides the wrong Wallet
              Address to GEMS for the transfer of the Tokens and neither GEMS
              nor the Token Entity will be liable if this results in any Tokens
              being transferred to someone other than the Contributor.
              Contributor further accept that Contributor will lose such Tokens
              and GEMS will not return the Contribution Amount. 4.5. Contributor
              acknowledges and agrees that all right, title and interest in and
              to the Platform and software underlying the Tokens, including
              associated intellectual property rights and all improvements,
              modifications, revisions, derivative works, customization and
              integration work product, customer feedback, suggestions and
              white-label branded applications, are and shall remain the sole
              and exclusive property of GEMS and its licensors. These Terms and
              the rights granted hereunder do not convey to Contributor any
              interest in or to the Platform or software underlying the Tokens.
              4.6. The Contributor has received information that it regards as
              sufficient to fully evaluate these Terms, the Tokens, and the
              Services, and has been provided an opportunity to obtain any
              additional information concerning the foregoing to the extent GEMS
              possesses such information or can acquire it without unreasonable
              effort or expense, and has been given the opportunity to ask
              questions of, and receive answers from, GEMS concerning the
              Tokens, including their intended features, functions, and
              limitations. 4.7. The Contributor intends to acquire the Tokens
              for use on the Platform. The Contributor is not purchasing the
              rights to acquire the Tokens for any uses or purposes other than
              to use them on the Platform, including, but not limited to, any
              investment, speculative or other financial purposes. 4.8. It is
              solely the Contributor’s responsibility to determine if the
              Contributor can legally purchase the rights to acquire the Tokens.
              The Contributor’s purchase of the rights to acquire the Tokens
              complies with the applicable laws and regulations to which the
              Contributor is subject, including, but not limited to, (i) legal
              capacity and any other threshold requirements in the jurisdiction
              to which the Contributor is subject for the purchase of the Tokens
              and entering into contracts with GEMS, (ii) any foreign exchange,
              money service business, licensing or regulatory restrictions
              applicable to such purchase, and (iii) any governmental or other
              consents that may need to be obtained. 4.9. The Contributor is
              not, and has not been involved in any type of activity associated
              with money laundering or terror financing, nor violated any
              provision of the U.S. Foreign Corrupt Practices Act of 1977, as
              amended, the UK Bribery Act (2010), or any other applicable
              anti-corruption or anti bribery legislation, nor was ever subject,
              to any investigation by, or has received a request for information
              from any governmental body relating to corruption or bribery under
              any statute and the Contributor hereby consents to GEMS running
              any checks or enquiries with third parties and waives any privacy
              or other right in connection therewith and acknowledges that any
              breach of this representation by the Contributor will entitle GEMS
              to terminate these Terms with immediate effect. 4.10. The
              Contributor has carefully reviewed and understands and accepts the
              various risks of entering into these Terms, including, but not
              limited to, the risks detailed in Exhibit A, and the risks
              associated with holding Tokens. The Contributor has not relied on
              any representations or warranties made by GEMS, any GEMS
              Representative, GEMS and/or any GEMS Associated Person outside of
              these Terms, including, but not limited to, conversations of any
              kind, whether through oral or electronic communication, or any
              whitepaper or similar document. WITHOUT LIMITING THE GENERALITY OF
              THE FOREGOING, THE CONTRIBUTOR ASSUMES ALL RISK AND LIABILITY FOR
              THE RISKS OF ENTERING INTO THESE TERMS AND THE RESULTS OBTAINED BY
              THE USE OF THE TOKENS AND REGARDLESS OF ANY ORAL OR WRITTEN
              STATEMENTS MADE BY GEMS, ANY GEMS ASSOCIATED PERSON OR ANY GEMS
              REPRESENTATIVE, INCLUDING IN THE FORM OF TECHNICAL ADVICE OR
              OTHERWISE, RELATED TO THE USE OF THE TOKENS. 4.11. The Contributor
              is not a citizen, resident or an entity incorporated in a
              geographic area in which the purchase, access to or use of the
              Tokens is prohibited by applicable law, decree, regulation,
              treaty, or administrative act. Neither the Contributor, nor any of
              its affiliates, shareholders, direct or indirect owner or
              beneficiaries is located in, resident in or incorporated under the
              laws of Afghanistan, Belarus, Burundi, Central African Republic,
              Congo (the Democratic Republic of the Congo), Cuba, Guinea,
              Guinea- Bissau, Haiti, Iran, Iraq, the Democratic People's
              Republic of Korea (North Korea), Lebanon, Libya, Mali, Myanmar
              (Burma), Nicaragua, Somalia, South Sudan, Sudan, Syria, Taiwan,
              Venezuela, Western Sahara, Yemen, Zimbabwe; the Krim, Donetsk,
              Kherson and Luhansk regions of Ukraine, or any other jurisdiction
              which is the target of such comprehensive, country-wide or
              territory-wide Sanctions as currently apply to the aforementioned
              countries or any country or territory that has been designated as
              non-cooperative with international anti-money laundering
              principles or procedures by an intergovernmental group or
              organization, such as the Financial Action Task Force on Money
              Laundering (“FATF”) (each, a “Restricted Jurisdiction”). 4.12.
              Neither the Contributor, nor any of its affiliates, shareholders,
              direct or indirect owner or beneficiaries is the target of any
              sanctions laws, regulations, embargoes or restrictive measures
              (the “Sanctions”), as amended from time to time, administered,
              enacted or enforced by: the United Nations, the United States of
              America, the European Union or any Member State thereof, the
              United Kingdom or the respective Governmental Authorities of any
              of the foregoing responsible for administering, enacting or
              enforcing Sanctions, including without limitation, OFAC, the US
              Department of State or the United Kingdom Treasury (the “Sanctions
              Authority”). 4.13. Neither the Contributor, nor any of its
              affiliates, shareholders, direct or indirect owner or
              beneficiaries is listed on any of the following lists (each a
              “Sanctions List”): the Consolidated United Nations Security
              Council Sanctions List; the Specially Designated Nationals and
              Blocked Persons List or the Sectoral Sanctions Identification List
              maintained by the US Office of Foreign Assets Control (OFAC); the
              Consolidated List of Persons, Groups and Entities subject to EU
              Financial Sanctions; the Consolidated List of Financial Sanctions
              Targets or List of persons subject to restrictive measures in view
              of Russia's actions destabilizing the situation in Ukraine,
              maintained by the United Kingdom Treasury or any similar list
              maintained by, or public announcement of sanctions made by, any
              other Sanctions Authority. 4.14. Neither the Contributor, nor any
              of its affiliates, shareholders, direct or indirect owner or
              beneficiaries is owned or controlled by, or acting on behalf of or
              for the benefit of, any person on a Sanctions List or who is a
              citizen, resident or incorporated in any Restricted Jurisdiction.
              4.15. The Contributor covenants that the Contribution Amount used
              for the settlement of these Terms will not be sourced from assets,
              funds or accounts located in any Restricted Jurisdiction. 4.16.
              The Contributor will indemnify and hold harmless GEMS and GEMS
              Associated Persons from and against any and all liabilities,
              losses, damages, costs, and other expenses (including reasonable
              attorney’s fees and expenses) arising from or relating to any
              breach of any representation, warranty, covenant or obligation of
              the Contributor in these Terms, or the Contributor’s intentional
              misconduct, bad faith or gross negligence. 4.17. The Contributor
              hereby acknowledges, approves and confirms that he/she/it is aware
              that GEMS may sell Tokens to different purchasers at different
              prices and/or under different terms, at GEMS GEMS’s sole
              discretion, and the Contributor hereby waives and irrevocably
              releases any and all claims and causes of action now or hereafter
              arising against GEMS or its affiliates or any of its respective
              directors, officers, employees, agents or affiliates for based
              upon or relating to such sales. 5.Miscellaneous. Distribution of
              Blockchain Tokens in accordance with Section 2 above will
              constitute the full and final discharge of any and all obligations
              of GEMS hereunder. The Contributor shall bear all tax consequences
              and shall pay all compulsory payments resulting from these Terms,
              repayment or conversion of the Contribution Amount and/or
              provision of any Tokens to the Contributor. GEMS may withhold any
              tax or other amounts required by applicable law from any repayment
              or conversion of the Contribution Amount or issuance of Tokens.
              GEMS may condition any repayment or conversion of the Conversion
              Amount or issuance of any Tokens on the Contributor satisfying any
              such withholding obligations or other tax payments in cash.
              Neither these Terms nor any rights or obligations hereunder,
              including without limitation the right to receive any Tokens, may
              be assigned by the Contributor, in whole or in part, without the
              express prior written consent of GEMS. GEMS may transfer and
              assign its rights and obligations hereunder to the Token Entity.
              This Terms shall be governed exclusively by the laws of Cayman
              Islands (excluding the United Nations Convention on Contracts for
              the International Sale of Goods). The place of jurisdiction shall
              be exclusively in the Cayman Islands. Notwithstanding the
              foregoing, GEMS, any GEMS Representative and/or any GEMS
              Associated Person shall have the right to seek any injunctive or
              other equitable or preliminary relief in any court having
              competent jurisdiction over the Contributor. These Terms shall be
              binding upon and inure solely to the benefit of each party hereto.
              This Terms constitutes the entire agreement between the parties
              hereto with respect to the subject matter hereof and supersedes
              any prior agreements and understandings relating thereto. Any term
              of these Terms may be amended or terminated and the observance of
              any term hereof may be waived (either prospectively or
              retroactively and either generally or in a particular instance)
              with the written consent of the Contributor. The Token Entity
              shall be a third party beneficiary of all rights, benefits and
              remedies of GEMS hereunder. Exhibit A Risk Factors 1. Risks
              Associated with the Launch of the Platform If the Platform’s
              functionality does not meet users’ expectations, the value of the
              Tokens may be adversely affected. As of the date of these Terms,
              the Token Generation has not occurred, and the Platform has not
              been fully developed. If the Platform’s functionality and
              usefulness does not meet users’ expectations, the value of the
              Tokens may be negatively impacted, and such impact may be material
              and could result in the Token having little or no value
              whatsoever. GEMS’s plans for the Platform or the Tokens may change
              prior to the Token Generation, which may adversely affect the
              Platform and the value of the Tokens. As of the date of these
              Terms, the specifications for the Platform and the Tokens are
              still under development. GEMS may, subject to the conditions set
              forth in the Terms, change the characteristics of the Platform or
              the Tokens, which may cause them not to meet any or all
              expectations or assumptions regarding the form and functionality
              of the Platform or the Tokens, including, without limitation, any
              or all expectations or assumptions that you may have. If the
              Platform launches, but the functionality and usefulness of the
              Platform does not meet users’ or members’ expectations, the value
              of the Tokens may be negatively impacted, and such impact may be
              material and could result in the Token having little or no value
              whatsoever. GEMS may dissolve, which could prevent or impede the
              Token Generation or negatively affect the operation of the
              Platform. It is possible that, due to any number of reasons,
              including, without limitation, an unfavorable fluctuation in the
              value of certain digital assets, development issues with the
              Platform, the failure of business relationships, or competing
              intellectual property claims, the development of the Platform may
              no longer be viable as a business or otherwise and GEMS may
              dissolve or fail to launch. In such an event, the amount you
              contribute in consideration for the Tokens may not be repaid to
              you, or the amount of such repayment may be less than what you
              paid. 2. Risks Associated with the Tokens Holders of Tokens may
              lose access to those Tokens if they can no longer access their
              wallets. The Tokens, when generated and issued, will be
              controllable only by the possessor of unique private keys relating
              to the addresses in which the Tokens are held. The theft, loss or
              destructions of a private key required to access Tokens is
              irreversible, and because GEMS does not have access to those
              private keys, such private keys could not be restored by GEMS, and
              GEMS will not be responsible for Contributor’s loss of access to
              its token wallet. Your Tokens may be stolen, transferred, or used
              by others if your credentials are compromised. Any person that
              gains access to or learns of your credentials or private keys may
              be able to use or dispose of any or all of your Tokens. GEMS does
              not have the ability to restore Tokens that have been stolen.
              Unlike bank accounts or accounts at some other financial
              institutions, the Tokens are uninsured and, in the event of any
              loss, there is no public insurer, such as the FDIC or SIPC in the
              United States, or private insurer, to offer recourse to you. The
              resale of the Tokens is restricted and, even following the Token
              Generation, may be illiquid. There are currently no exchanges upon
              which the Tokens trade and there may never be a secondary market
              for the Tokens. Furthermore, we may restrict the transfer of
              Tokens between wallets until the occurrence of a certain event(s),
              (e.g. until such time as they are listed on an exchange) at our
              sole discretion. This could impact your ability to sell or
              transfer the Tokens and may negatively impact the value of the
              Tokens. The liquidity of any market for the Tokens will depend
              upon the number of holders of the Tokens, the performance of the
              Platform, the market for similar tokens, and the interest of
              market participants in making a market in the Tokens and other
              factors. Any such impact could be negative and material and could
              result in the Token having little or no value whatsoever. Once the
              Token Generation event has occurred, the Tokens may not be listed
              on an exchange and, even if listed on an exchange, may be thinly
              traded or delisted. Following the Token Generation event, the
              Tokens may be listed on one or more exchanges. For various
              reasons, including, without limitation, regulatory developments
              and a lack of purchaser interest, the Tokens may be thinly traded
              or may be removed from listing on such exchanges. This could
              impact your ability to sell the Tokens and may negatively impact
              the value of the Tokens. Any such impact could be negative and
              material and could result in the Token having little or no value
              whatsoever. 3. Risks Associated with the Platform The Platform may
              malfunction due to problems with the underlying blockchain on
              which it is launched. The Platform is intended to be launched on
              the Ethereum blockchain (ERC-20). As such, any malfunction,
              unintended function, unexpected functioning of or attack on
              Ethereum may cause the Platform to malfunction or function in an
              unexpected or unintended manner. Alternatively, the Token may be
              launched on a different blockchain which itself is insecure or
              susceptible to attacks or malfunctioning. The impact of any such
              malfunction or unexpected or unintended function could be negative
              and material and could result in the Token having little or no
              value whatsoever. If there is insufficient interest in the
              Platform or blockchain technologies, the Tokens may have limited
              or no utility or value. It is possible that the Platform will not
              be used by a large number of businesses, individuals, and other
              organizations and that there will be limited public interest in
              the creation and development of distributed applications. Such a
              lack of interest could negatively impact the utility of the
              Tokens. Any such impact could be negative and material and could
              result in the Token having little or no value whatsoever. While
              the Tokens should not be viewed as an investment, they may have
              value over time. That value may be limited and may be zero if the
              Platform lacks use and adoption. If this becomes the case, there
              may be few or no markets following the launch of the application,
              potentially having an adverse impact on the value of the Tokens.
              Any such impact could be negative and material and could result in
              the Token having little or no value whatsoever. Projects selected
              to raise funding on the Platform may be fraudulent or insecure.
              GEMS does its best to vet the various projects which use its
              Platform to raise funding, however, there may be situations in
              which a specific project goes awry and takes advantage of its
              contributors. Any such event could greatly affect the Platform and
              could result in the Token having little or no value whatsoever.
              Security weaknesses could negatively impact the operation of the
              Platform. Developers involved in the creation and operation of the
              Platform, or other persons may intentionally or unintentionally
              introduce weaknesses or bugs into the core infrastructural
              elements of the Platform, which could interfere with the operation
              of the Platform or result in the loss of Tokens. In addition,
              advances in cryptography, or technical advances such as the
              development of quantum computers, could present risks to
              cryptographic tokens (including, without limitation, the Tokens)
              and the Platform, which could result in the theft or loss of
              Tokens. As with other decentralized cryptographic tokens and
              cryptocurrencies, the blockchain that the Platform may be built on
              has inherent risks and is susceptible to mining attacks,
              including, without limitation, double-spend attacks, majority
              mining power attacks, “selfish-mining” attacks, and race condition
              attacks, and other attacks. Any successful attacks present a risk
              to the Platform, the Tokens, and expected proper execution and
              sequencing of contract computations, and GEMS will have no ability
              to mitigate any such attacks happening on the blockchain network.
              Additionally, centralized access portals on internet servers are
              subject to similar attacks such as denial-of-service (DoS) and
              distributed DoS (DDoS) attacks, which can also present issues of
              security to the network. Any impact of such risks could be
              negative and material and could result in the Token having little
              or no value whatsoever. The technology underlying the Platform is
              new and may be subject to additional risks. Cryptographic tokens
              are a new and untested technology. In addition to the risks
              discussed herein, there are risks that GEMS and the developers of
              the Platform cannot anticipate. Further risks may materialize as
              unanticipated combinations or variations of the discussed risks or
              the emergence of new risks. Any impact of such risks could be
              negative and material and could result in the Token having little
              or no value whatsoever. Stress on the blockchain on which the
              Platform is built can slow down transactions and/or increase costs
              associated with the transactions on the network which may
              negatively impact the Platform’ operations. As with any blockchain
              networks, a large transaction volume can put a strain on the
              network, slowing down the transaction time and/or increasing costs
              for the transactions. For example, in the case of the Ethereum
              blockchain, the Platform is not the only decentralized application
              that is built on Ethereum. Increasing saturation of applications
              on the Ethereum network and high volume of transactions on the
              Ethereum network from other participants on the network can slow
              down the transactions happening through the Platform. 4. Legal and
              Regulatory Risks Intellectual property claims may adversely affect
              the operation of the Platform. Third parties may assert
              intellectual property claims relating to the operation of the
              Platform or the holding or transfer of the Tokens. Regardless of
              the merit of any intellectual property or other legal action, any
              threatened action that reduces confidence in the Platform'
              long-term viability or the ability of end-users to hold and
              transfer Tokens may adversely affect the usefulness and value of
              the Tokens. Additionally, a meritorious intellectual property
              claim could prevent GEMS from improving, or end users from
              accessing, the Platform or holding or transferring their Tokens,
              which could adversely impact the utility of the Platform or the
              value of the Tokens, and such impact could be material and could
              result in the Tokens having little or no value whatsoever.
              Unfavorable legal or regulatory action could have a negative
              impact on the utility of the Platform and Tokens, as well as the
              value of Tokens. Blockchain technologies have been the subject of
              scrutiny by various regulatory bodies around the world. The
              functioning of the Platform and the Tokens could be impacted by
              one or more regulatory inquiries or actions, including, without
              limitation, the licensing of or restrictions on the use, sale, or
              possession of digital tokens like the Tokens, which could impede,
              limit or end the development of the Platform. Any such impact
              could be negative and material and could result in the Token
              having little or no value whatsoever. 5. The tax treatment of the
              Terms and the Token is uncertain and there may be adverse tax
              consequences for Contributors upon certain future events. The tax
              characterization of the Terms and the Tokens is uncertain, and
              each Contributor must seek its own tax advice in connection with
              the Terms and the Tokens. The Terms and the receipt of Tokens
              pursuant thereto may result in adverse tax consequences to
              Contributors, including withholding taxes, income taxes and tax
              reporting requirements. Each Contributor should consult with and
              must rely upon the advice of its own professional tax advisors
              with respect to the tax treatment of the Terms and the Tokens.
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              className="mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="acceptTerms">I understand and accept</label>
          </div>
          <button
            className="mt-4 bg-blue-500 font-bold text-white py-2 px-8 rounded hover:bg-blue-600"
            onClick={() => onAccept(isChecked)}
            disabled={!isChecked}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
