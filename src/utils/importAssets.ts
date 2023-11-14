export default function getImageUrl(name: string) {
  return new URL(`../assets/images/${name}.svg`, import.meta.url).href;
}
