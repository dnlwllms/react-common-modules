export interface Domain {
  id: string;
  order: number;
  title: string;
  path: string;
  children: Domain[];
}

export const COMPONENT_DOMAIN_ID = "b47bd783-cad6-4257-9bec-6226b4fe93ed";
export const DATA_VISUALIZATION_DOMAIN_ID =
  "301c7764-830b-4cc5-a093-4321d29394823";
export const OTHER_DOMAIN_ID = "bda58b6a-7eef-4f9a-bcfc-fb6b30daf234";

export const BUTTON_DOMAIN_ID = "ad596e7c-1d4d-498f-a6da-9a9282671cd6";
export const COLLAPSE_DOMAIN_ID = "b54c36d9-fd2e-4964-993d-4dc452903151";
export const DROPDOWN_DOMAIN_ID = "eca967be-9830-4688-af30-fbba5438ba4d";
export const ICON_BUTTON_DOMAIN_ID = "ed37f751-fb19-4ccd-be2a-0a453f9b8953";
export const TEXT_BUTTON_DOMAIN_ID = "f6035aa0-17f3-4494-8877-7f24283d9497";
export const MENU_DOMAIN_ID = "9ad7c560-d238-4d1b-b32e-56fc9904d108";
export const BREADCRUMB_DOMAIN_ID = "92437fc0-c46e-4c0c-b80d-cf95a514b376";
export const CIRCLE_ICON_BUTTON_DOMAIN_ID =
  "f0596470-49fd-4fcd-9abc-108bd45fdbf6";

export const BADGE_DOMAIN_ID = "6c682c06-70e0-4bb9-9068-3c2289f15202";
export const TOAST_DOMAIN_ID = "3e3b311e-9435-4224-8e05-b65cd0a8ddb6";
export const MODAL_DOMAIN_ID = "a912bdc1-525e-4b1b-bdbe-4c8613d81a48";
export const ALERT_DOMAIN_ID = "091f9d11-6145-4457-b306-6dfaba3f8b77";
export const SPINNER_DOMAIN_ID = "f6f3b082-5c65-4649-8866-c45b220ce7f4";

export const TAG_DOMAIN_ID = "15944ac8-6b8d-4f40-8205-91b44c5823c6";
export const TOOLTIP_DOMAIN_ID = "998e6ab7-d196-491f-8e6a-f188b5c2f2ac";
export const PAGINATION_DOMAIN_ID = "5e7bc051-4e98-4bed-be5f-822c2664032a";
export const TREE_DOMAIN_ID = "8eb4da75-8f5b-476e-8ba9-b9ada5c736a3";
export const IMAGE_GALLERY_DOMAIN_ID = "8eb4da75-8f5b-476e-8ba9-b9ada5c736a4";

export const TAB_DOMAIN_ID = "b50599c7-b565-4442-a4c7-303becccd0b2";
export const VERTICAL_TAB_DOMAIN_ID = "43204822-b894-40ee-abe0-67b018ae06af";

export const CHECKBOX_DOMAIN_ID = "d98f22b4-9bca-42e3-baf5-f03136a20700";
export const RADIO_BUTTON_DOMAIN_ID = "b96556c1-ad01-4a51-835f-42b5cfb1c3e5";
export const SLIDER_DOMAIN_ID = "e7aa1bb6-8a9e-4901-ab3b-d43231f53a07";
export const TOGGLE_DOMAIN_ID = "ae95f66a-7186-42bc-b93f-207afb6de2f2";
export const CHIP_DOMAIN_ID = "2d18ee67-82e4-4894-b208-9feebd641a0f";
export const CALENDAR_DOMAIN_ID = "2d18ee67-82e4-4894-b208-9feebd641123";
export const UPLOAD_DOMAIN_ID = "9418c453-8195-4c91-8239-cb57d2193313";

export const INPUT_DOMAIN_ID = "70cd502c-ee1e-414d-9d91-b4f01676deb7";
export const SEARCH_DOMAIN_ID = "f5412bb2-5da1-481f-ace9-06e22d236a01";
export const TEXTAREA_DOMAIN_ID = "6102f451-a558-4cee-9f84-defe7827a4ff";

export const BAR_CHART_DOMAIN_ID = "bda58b6a-7eef-4f9a-bcfc-fb6b30daf889";
export const COLUMN_CHART_DOMAIN_ID = "ea1cc62d-3843-4079-a8e4-f2902b96d6ef";
export const LINE_CHART_DOMAIN_ID = "2ee91015-52f0-4f19-b9e1-02ce179d68dd";
export const COMBO_CHART_DOMAIN_ID = "bba006e9-b370-4d30-9934-237aaed8546b";
export const PIE_CHART_DOMAIN_ID = "d6f709b7-f89e-4ed1-824e-7fe67420457f";
export const SCATTER_CHART_DOMAIN_ID = "a4503779-03dd-41ed-aa5e-dd48178a3004";
export const RADAR_CHART_DOMAIN_ID = "6391690c-c4be-45b8-9bff-29e2903d3495";

export const WIDGETUI_DOMAIN_ID = "bda58b6a-7eef-4f9a-bcfc-fb6b30daf777";

export const TABLE_DOMAIN_ID = "bda58b6a-7eef-4f9a-bcfc-fb6b30daf999";

const domainIds = [
  BUTTON_DOMAIN_ID,
  COLLAPSE_DOMAIN_ID,
  DROPDOWN_DOMAIN_ID,
  ICON_BUTTON_DOMAIN_ID,
  TEXT_BUTTON_DOMAIN_ID,
  MENU_DOMAIN_ID,
  BREADCRUMB_DOMAIN_ID,

  PAGINATION_DOMAIN_ID,

  BADGE_DOMAIN_ID,
  TOAST_DOMAIN_ID,
  MODAL_DOMAIN_ID,
  ALERT_DOMAIN_ID,
  SPINNER_DOMAIN_ID,

  TAG_DOMAIN_ID,

  TAB_DOMAIN_ID,
  VERTICAL_TAB_DOMAIN_ID,
  TOOLTIP_DOMAIN_ID,
  IMAGE_GALLERY_DOMAIN_ID,

  CHECKBOX_DOMAIN_ID,
  RADIO_BUTTON_DOMAIN_ID,
  SLIDER_DOMAIN_ID,
  TOGGLE_DOMAIN_ID,
  CHIP_DOMAIN_ID,
  CALENDAR_DOMAIN_ID,
  UPLOAD_DOMAIN_ID,

  INPUT_DOMAIN_ID,
  SEARCH_DOMAIN_ID,

  BAR_CHART_DOMAIN_ID,
  COLUMN_CHART_DOMAIN_ID,
  LINE_CHART_DOMAIN_ID,
  COMBO_CHART_DOMAIN_ID,
  PIE_CHART_DOMAIN_ID,
  SCATTER_CHART_DOMAIN_ID,
  RADAR_CHART_DOMAIN_ID,
  WIDGETUI_DOMAIN_ID,
  TABLE_DOMAIN_ID,
] as const;

export type DomainId = (typeof domainIds)[number];

export const getDomain = (id: string, domains: Domain[]) => {
  let result: Domain | undefined;

  find(domains);

  function find(domains: Domain[]) {
    if (result) {
      return;
    }

    for (let index = 0; index < domains.length; index++) {
      const domain = domains[index];

      if (result) {
        break;
      }

      if (domain.id === id) {
        result = domain;
        break;
      }
      if (hasChildren(domain)) {
        find(domain.children);
      }
    }
  }

  return result;
};

export const hasChildren = (domain: Domain) => domain.children.length > 0;
