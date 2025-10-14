
// app/compliance/[role]/bvn.tsx
import { useLocalSearchParams } from "expo-router";
import BVNForm from "@/components/compliance/BVNForm";

export default function RoleBVN() {
  const { role } = useLocalSearchParams<{ role: string }>();
  return <BVNForm role={role} />;
}
