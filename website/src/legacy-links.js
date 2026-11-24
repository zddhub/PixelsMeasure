const policyPaths = new Map([
  ["privacy", "privacy/"],
  ["terms-of-service", "terms-of-service/"]
]);

export function scrollToSection() {
  const section = document.getElementById(window.location.hash.slice(1));
  if (section) section.scrollIntoView();
}

// Published App Store and app links still use the old browser-only fragments.
export function followLegacyLink() {
  const { hash, pathname, search } = window.location;
  if (!hash.startsWith("#/")) return false;

  let target;
  try {
    target = decodeURIComponent(hash.slice(2));
  } catch {
    return false;
  }

  const policy = policyPaths.get(target.replace(/\/$/, ""));
  if (policy) {
    window.location.replace(process.env.BASE_URL + policy + search);
    return true;
  }

  if (target === "" || /^#(?:workflow|tools|download|spacing)$/.test(target)) {
    window.history.replaceState(window.history.state, "", pathname + search + target);
    if (target) scrollToSection();
    else window.scrollTo(0, 0);
  }
  return false;
}
