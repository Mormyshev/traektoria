type ValidValue = string | number | Array<string | number>;

type ValidEntry = ValidValue | Record<string, ValidValue>;

type ConditionalEntry = {
  value: ValidValue | undefined | null;
  shouldInclude: boolean;
};

export type ComposeRequestKeyParams = {
  name: string;
  detail?: ValidValue | ConditionalEntry | null;
  filters?: Record<string, ValidValue | ConditionalEntry | undefined | null>;
};

const isConditionalEntry = (arg: ValidEntry | ConditionalEntry): arg is ConditionalEntry => {
  return typeof arg === "object" && "value" in arg && "shouldInclude" in arg;
};

export const composeRequestKey = (params: ComposeRequestKeyParams) => {
  const { name, detail, filters } = params;

  const keyArray: Array<ValidEntry> = [name];

  if (detail) {
    if (isConditionalEntry(detail)) {
      if (Array.isArray(detail.value) && detail.shouldInclude && detail.value.length > 0) {
        keyArray.push(...detail.value);
      } else if (detail.value && detail.shouldInclude) {
        keyArray.push(detail.value);
      }
    } else {
      if (Array.isArray(detail) && detail.length > 0) {
        keyArray.push(...detail);
      } else {
        keyArray.push(detail);
      }
    }
  }

  if (filters) {
    const cleanedFilters: { [key: string]: ValidValue } = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        if (isConditionalEntry(value)) {
          if (value.value && value.shouldInclude) {
            cleanedFilters[key] = value.value;
          }
        } else {
          cleanedFilters[key] = value;
        }
      }
    });

    if (Object.keys(cleanedFilters).length > 0) {
      keyArray.push(cleanedFilters);
    }
  }

  return keyArray;
};
