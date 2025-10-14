// app/compliance/[role]/documents.tsx
import { useLocalSearchParams } from "expo-router";
import DocumentUploader from "@/components/compliance/DocumentUploader";

export default function RoleDocuments() {
  const { role } = useLocalSearchParams<{ role: string }>();
  return <DocumentUploader role={role} />;
}
